import {Component, OnDestroy, OnInit, ElementRef, AfterViewInit, ViewChild} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

import {UiToolbarService, UiSnackbar, UiElement} from 'ng-smn-ui';

import {ApiService} from '../../../core/api/api.service';

@Component({
    selector: 'app-livro-list',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss']
})

export class LivroInfoComponent implements OnInit, AfterViewInit, OnDestroy {
    info: any;
    saving: boolean;
    deleting: boolean;
    addingNew: boolean;
    loading = true;
    autores;
    editoras;
    @ViewChild('inputNovaImagem') inputNovaImagem;

    constructor(private toolbarService: UiToolbarService,
                private api: ApiService,
                public _location: Location,
                private router: Router,
                private route: ActivatedRoute,
                private element: ElementRef) {
        this.info = {};
        this.autores = [];
        this.editoras = [];
    }

    ngOnInit() {
        this.getAutores();
        this.getEditoras();
    }

    ngAfterViewInit() {
        this.toolbarService.set('Livro');
        this.toolbarService.activateExtendedToolbar(480);

        if (this.route.snapshot.params['id']) {
            setTimeout(() => {
                this.addingNew = false;
            });
            this.getInfo();
        } else {
            setTimeout(() => {
                this.addingNew = true;
                this.loading = false;
            });
        }
    }

    ngOnDestroy() {
        this.toolbarService.deactivateExtendedToolbar();
    }

    getAutores() {
        if (!this.autores.carregando) {
            this.autores.carregando = true;

            this.api
                .prep('autor', 'selecionarSimples')
                .call()
                .subscribe(data => {
                    this.autores = data.data;
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

    getInfo() {
        this.api
            .prep('livro', 'selecionarPorId')
            .call({
                id: this.route.snapshot.params['id']
            })
            .subscribe(data => {
                Object.assign(this.info, data);
            }, error => {
                if (error.executionCode === 1) {
                    this.router.navigate(['/livro'], {replaceUrl: true});
                    UiSnackbar.show({
                        text: error.message
                    });
                }
            }, () => {
                this.loading = false;
            });
    }

    onSubmit(form) {
        if (!this.saving) {
            this.saving = true;

            for (const control in form.controls) {
                if (form.controls.hasOwnProperty(control)) {
                    form.controls[control].markAsTouched();
                    form.controls[control].markAsDirty();
                }
            }

            if (!form.valid) {
                UiElement.focus(this.element.nativeElement.querySelector('form .ng-invalid'));
                this.saving = false;
                return false;
            }

            if (this.addingNew) {
                this.api
                    .prep('livro', 'inserir')
                    .call(this.info)
                    .subscribe(data => {
                        window.history.replaceState(null, document.title, '/livro/' + data.id);
                        this.router.navigate(['/livro']);
                        UiSnackbar.show({
                            text: 'Livro inserido com sucesso'
                        });
                    }, () => {
                        this.saving = false;
                    });
            } else {
                this.api
                    .prep('livro', 'atualizar')
                    .call(this.info)
                    .subscribe(() => {
                        this.router.navigate(['/livro']);
                        UiSnackbar.show({
                            text: 'Livro alterado com sucesso'
                        });
                    }, error => {
                        this.saving = false;
                        switch (error.executionCode) {
                            case 1:
                                UiSnackbar.show({
                                    text: 'Livro não encontrado. Verifique se ele foi excluído.'
                                });
                                break;
                            default:
                                UiSnackbar.show({
                                    text: error.message
                                });
                        }
                    });
            }
        }
    }

    confirmDelete() {
        if (!this.deleting) {
            this.deleting = true;

            this.api
                .prep('livro', 'remover')
                .call({
                    id: this.info.id
                })
                .subscribe(() => {
                    this.router.navigate(['/livro']);
                    UiSnackbar.show({
                        text: 'Livro excluído com sucesso'
                    });
                }, error => {
                    this.deleting = false;
                    switch (error.executionCode) {
                        case 1:
                            UiSnackbar.show({
                                text: 'Livro não encontrado. Verifique se ele já não foi excluído.'
                            });
                            break;
                        default:
                            UiSnackbar.show({
                                text: error.message
                            });
                    }
                });
        }
    }

    changeImagem(file, base64) {
        this.info.nomeNovaImagem = file.name;
        this.info.novaImagem = base64;
    }

    changeImagemError(file, customError) {
        if (customError.type) {
            UiSnackbar.show({
                text: 'Escolha um arquivo JPG, JPEG ou PNG',
                actionText: 'OK',
                action: close => close()
            });
        } else if (customError.maxFileSize) {
            UiSnackbar.show({
                text: 'Escolha um arquivo menor que 15MB',
                actionText: 'OK',
                action: close => close()
            });
        } else {
            UiSnackbar.show({
                text: 'Não foi possível trocar a imagem',
                actionText: 'OK',
                action: close => close(),
                duration: Infinity
            });
        }

        this.info.novaImagem = null;
        this.info.imagem = null;
        this.inputNovaImagem.value = '';
    }
}
