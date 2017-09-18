import {Component, AfterViewInit, ElementRef, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import {Router} from '@angular/router';

import {Subject} from 'rxjs/Subject';

import {UiToolbarService, UiElement, UiColor} from 'ng-smn-ui';

import {ApiService} from '../../../core/api/api.service';

@Component({
    selector: 'app-editora-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    providers: [UiColor]
})

export class EditoraListComponent implements AfterViewInit, OnInit, OnDestroy {
    editoras: any;
    searchOpen: boolean;
    searching: boolean;
    loading: boolean;
    searchText: string;
    private searchTerms = new Subject<string>();
    lineCount: number;
    page: number;
    orderBy: string[];

    constructor(private toolbarService: UiToolbarService,
                private element: ElementRef,
                private api: ApiService,
                private router: Router,
                private changeDetectorRef: ChangeDetectorRef) {
        this.page = 1;
        this.orderBy = [];
    }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit() {
        this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(() => {
                this.searching = true;
                this.getEditoras();
            });
    }

    ngAfterViewInit() {
        this.toolbarService.set('Editoras');
        this.toolbarService.activateExtendedToolbar(480);

        this.getEditoras();
    }

    ngOnDestroy() {
        this.toolbarService.deactivateExtendedToolbar();
    }

    getEditoras() {
        this.loading = true;
        this.changeDetectorRef.detectChanges();

        this.api
            .prep('editora', 'selecionar')
            .call({
                search: this.searchText || '',
                page: this.page || 1,
                order: this.orderBy.join(',')
            })
            .subscribe((data) => {
                this.loading = false;
                this.searching = false;
                this.lineCount = data.lineCount;
                this.editoras = data.data;
            });
    }

    toggleSearch() {
        const inputSearch = this.element.nativeElement.querySelectorAll('input[name="searchText"]')[0];

        if (this.searchOpen) {
            this.searchOpen = false;
            UiElement.closest(inputSearch, 'form').style.right = '';
            this.searchText = '';
            this.getEditoras();
        } else {
            this.searchOpen = true;
            UiElement.closest(inputSearch, 'form').style.right = UiElement.closest(inputSearch, '.align-right').clientWidth + 'px';

            setTimeout(() => {
                inputSearch.focus();
            }, 280);
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
        this.getEditoras();
    }

    goInfo(e) {
        e.preventDefault();
        sessionStorage.setItem('goBack', 'true');
        this.router.navigate(['/editora/nova']);
    }

    isBright(color) {
        return UiColor.isBright(color);
    }
}

/**/
