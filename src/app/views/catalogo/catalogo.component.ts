import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ApiService} from 'app/core/api/api.service';
import {UiSnackbar, UiToolbarService, UiInfiniteLoadService} from 'ng-smn-ui';
import {Subject} from 'rxjs/Subject';

@Component({
    selector: 'app-catalogo',
    templateUrl: './catalogo.component.html',
    styleUrls: ['catalogo.component.scss']
})
export class CatalogoComponent implements OnInit, AfterViewInit {
    livros;
    autores;
    filtroAutor;
    editoras;
    filtroEditora;
    filtroTitulo;
    private searchTerms = new Subject<string>();

    constructor(private toolbarService: UiToolbarService,
                private api: ApiService,
                private infiniteLoad: UiInfiniteLoadService,
                private changeDetectorRef: ChangeDetectorRef) {
        this.livros = [];

        this.autores = [];
        this.editoras = [];
    }

    ngOnInit() {
        this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(() => {
                this.livros = [];
                this.getCatalogo();
            });

        this.getAutores();
        this.getEditoras();
    }

    ngAfterViewInit() {
        this.toolbarService.set('Catálogo');

        this.getCatalogo();

        this.infiniteLoad.register(window, () => {
            this.loadMoreCatalogo();
        });
    }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    getAutores() {
        if (!this.autores.carregando) {
            this.autores.carregando = true;

            this.api
                .prep('autor', 'selecionarSimples')
                .call()
                .subscribe(data => {
                    this.autores = data.data;
                    this.autores.unshift({id: null, nome: ''})
                }, () => {
                    this.autores = [];
                    UiSnackbar.show({
                        text: 'Não foi possível carregar os autores'
                    });
                }, () => {
                    this.autores.carregado = true;
                    this.autores.carregando = false;
                });
        }
    }

    getEditoras() {
        if (!this.editoras.carregando) {
            this.editoras.carregando = true;

            this.api
                .prep('editora', 'selecionarSimples')
                .call()
                .subscribe(data => {
                    this.editoras = data.data;
                    this.editoras.unshift({id: null, nome: ''})
                }, () => {
                    this.editoras = [];
                    UiSnackbar.show({
                        text: 'Não foi possível carregar as editoras'
                    });
                }, () => {
                    this.editoras.carregado = true;
                    this.editoras.carregando = false;
                });
        }
    }

    getCatalogo() {
        if (!this.livros.carregando) {
            this.livros.carregando = true;
            this.changeDetectorRef.detectChanges();

            this.api
                .prep('catalogo', 'selecionar')
                .call({
                    search: this.filtroTitulo,
                    idAutor: this.filtroAutor,
                    idEditora: this.filtroEditora
                })
                .subscribe(data => {
                    this.livros = data.data;
                }, () => {
                    this.livros = [];
                    UiSnackbar.show({
                        text: 'Não foi possível carregar os livros'
                    });
                }, () => {
                    this.livros.carregado = true;
                    this.livros.carregando = false;
                });
        }
    }

    loadMoreCatalogo() {
        if (!this.livros.carregando && !this.livros.noMore) {
            this.livros.carregando = true;

            this.api
                .prep('catalogo', 'selecionar')
                .call({
                    search: this.filtroTitulo,
                    idAutor: this.filtroAutor,
                    idEditora: this.filtroEditora,
                    unless: this.livros.map(item => item.id)
                })
                .subscribe(data => {
                    if (data.data.length) {
                        this.livros = [...this.livros, ...data.data];
                    } else {
                        this.livros.noMore = true;
                    }
                    this.livros.carregando = false;
                }, () => {
                    this.livros.carregando = false;
                    this.livros.noMore = true;
                });
        }
    }
}
