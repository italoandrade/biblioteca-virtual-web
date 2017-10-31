import {Component, AfterViewInit, ElementRef, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import {Router} from '@angular/router';

import {Subject} from 'rxjs/Subject';

import {UiToolbarService, UiElement, UiColor, UiSnackbar} from 'ng-smn-ui';

import {ApiService} from '../../../core/api/api.service';

@Component({
    selector: 'app-emprestimo-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    providers: [UiColor]
})

export class EmprestimoListComponent implements OnInit, AfterViewInit, OnDestroy {
    emprestimos: any;
    searchOpen: boolean;
    searching: boolean;
    loading: boolean;
    searchText: string;
    private searchTerms = new Subject<string>();
    lineCount: number;
    page: number;
    orderBy: string[];
    alterarStatusItem;

    constructor(private toolbarService: UiToolbarService,
                private element: ElementRef,
                private api: ApiService,
                private changeDetectorRef: ChangeDetectorRef) {
        this.page = 1;
        this.orderBy = [];
        this.emprestimos = [];
        this.alterarStatusItem = {};
    }

    ngOnInit() {
        this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(() => {
                this.searching = true;
                this.getEmprestimos();
            });
    }

    ngAfterViewInit() {
        this.toolbarService.set('Empréstimos');
        this.toolbarService.activateExtendedToolbar(960);

        this.getEmprestimos();
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
            this.getEmprestimos();
        } else {
            this.searchOpen = true;
            UiElement.closest(inputSearch, 'form').style.right = UiElement.closest(inputSearch, '.align-right').clientWidth + 'px';

            setTimeout(() => {
                inputSearch.focus();
            }, 280);
        }
    }

    getEmprestimos() {
        if (!this.loading && (!this.searchText || this.searchText.length <= 200)) {
            this.loading = true;
            this.changeDetectorRef.detectChanges();

            this.api
                .prep('emprestimo', 'selecionar')
                .call({
                    search: this.searchText || '',
                    page: this.page || 1,
                    order: this.orderBy.join(',')
                })
                .subscribe(data => {
                    this.emprestimos = data.data;
                    this.lineCount = data.lineCount;
                }, null, () => {
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
        this.getEmprestimos();
    }

    cancelReserva() {
        if (!this.alterarStatusItem.loading) {
            this.alterarStatusItem.loading = true;

            this.api
                .prep('emprestimo', 'cancelarReserva')
                .call({
                    id: this.alterarStatusItem.id
                })
                .subscribe(() => {
                    this.emprestimos.splice(this.emprestimos.indexOf(this.alterarStatusItem), 1);
                    UiSnackbar.show({
                        text: 'Reserva cancelada com sucesso'
                    });
                }, null, () => {
                    this.alterarStatusItem.loading = false;
                });
        }
    }

    markAsEmprestado() {
        if (!this.alterarStatusItem.loading) {
            this.alterarStatusItem.loading = true;

            this.api
                .prep('emprestimo', 'marcarEmprestado')
                .call({
                    id: this.alterarStatusItem.id
                })
                .subscribe(() => {
                    this.alterarStatusItem.dataEmprestimo = new Date();
                    this.alterarStatusItem.status = 'No prazo';
                    UiSnackbar.show({
                        text: 'Empréstimo marcado como emprestado com sucesso'
                    });
                }, null, () => {
                    this.alterarStatusItem.loading = false;
                });
        }
    }

    markAsDevolvido() {
        if (!this.alterarStatusItem.loading) {
            this.alterarStatusItem.loading = true;

            this.api
                .prep('emprestimo', 'marcarDevolvido')
                .call({
                    id: this.alterarStatusItem.id
                })
                .subscribe(() => {
                    this.alterarStatusItem.dataDevolucao = new Date();
                    this.alterarStatusItem.status = 'Devolvido';
                    UiSnackbar.show({
                        text: 'Empréstimo marcado como devolvido com sucesso'
                    });
                }, null, () => {
                    this.alterarStatusItem.loading = false;
                });
        }
    }
}
