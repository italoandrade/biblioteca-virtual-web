import {Component, AfterViewInit, ElementRef, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import {Router} from '@angular/router';

import {Subject} from 'rxjs/Subject';

import {UiToolbarService, UiElement, UiColor, UiSnackbar} from 'ng-smn-ui';

import {ApiService} from '../../../core/api/api.service';

@Component({
    selector: 'app-cliente-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class ClienteListComponent implements AfterViewInit, OnInit, OnDestroy {
    clientes: any;
    searchOpen: boolean;
    searching: boolean;
    loading: boolean;
    searchText: string;
    private searchTerms = new Subject<string>();
    lineCount: number;
    page: number;
    orderBy: string[];
    isBright = UiColor.isBright;

    constructor(private toolbarService: UiToolbarService,
                private element: ElementRef,
                private api: ApiService,
                private router: Router,
                private changeDetectorRef: ChangeDetectorRef) {
        this.page = 1;
        this.orderBy = [];
    }

    ngOnInit() {
        this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(() => {
                this.searching = true;
                this.getClientes();
            });
    }

    ngAfterViewInit() {
        this.toolbarService.set('Clientes');
        this.toolbarService.activateExtendedToolbar(960);

        this.getClientes();
    }

    ngOnDestroy() {
        this.toolbarService.deactivateExtendedToolbar();
    }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    toggleSearch() {
        const inputSearch = this.element.nativeElement.querySelector('input[name="searchText"]');

        if (this.searchOpen) {
            this.searchOpen = false;
            UiElement.closest(inputSearch, 'form').style.right = '';
            this.searchText = '';
            this.getClientes();
        } else {
            this.searchOpen = true;
            UiElement.closest(inputSearch, 'form').style.right = UiElement.closest(inputSearch, '.align-right').clientWidth + 'px';

            setTimeout(() => {
                inputSearch.focus();
            }, 280);
        }
    }

    getClientes() {
        if (!this.loading && (!this.searchText || this.searchText.length <= 200)) {
            this.loading = true;
            this.changeDetectorRef.detectChanges();

            this.api
                .prep('cliente', 'selecionar')
                .call({
                    search: this.searchText || '',
                    page: this.page || 1,
                    order: this.orderBy.join(',')
                })
                .subscribe(data => {
                    this.lineCount = data.lineCount;
                    this.clientes = data.data;
                }, error => {
                    if (error.status === 401) {
                        this.router.navigate(['']);
                    }
                }, () => {
                    this.loading = false;
                    this.searching = false;
                });
        }
    }

    toggleOrderBy(column: string) {
        if (this.orderBy.includes(column + '-ASC')
            || this.orderBy.includes(column + '-DESC')) {
            if (this.orderBy.includes(column + '-DESC')) {
                this.orderBy.push(column + '-ASC');
                this.orderBy.splice(this.orderBy.indexOf(column + '-DESC'), 1);
            } else if (this.orderBy.includes(column + '-ASC')) {
                if (this.orderBy.includes(column + '-ASC')) {
                    this.orderBy.splice(this.orderBy.indexOf(column + '-ASC'), 1);
                }
                if (this.orderBy.includes(column + '-DESC')) {
                    this.orderBy.splice(this.orderBy.indexOf(column + '-DESC'), 1);
                }
            }
        } else {
            this.orderBy.push(column + '-DESC');
        }
        this.getClientes();
    }

    notAClient(cliente) {
        UiSnackbar.show({
            text: 'O usuário ' + cliente.nome + ' não tem informação de cliente cadastrada'
        });
    }
}
