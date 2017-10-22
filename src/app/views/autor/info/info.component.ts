import {Component, OnDestroy, OnInit, ElementRef, AfterViewInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

import {UiToolbarService, UiSnackbar, UiElement} from 'ng-smn-ui';

import {ApiService} from '../../../core/api/api.service';

@Component({
    selector: 'app-autor-list',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss']
})

export class AutorInfoComponent implements AfterViewInit, OnDestroy {
    info: any;
    saving: boolean;
    deleting: boolean;
    addingNew: boolean;
    loading = true;

    constructor(private toolbarService: UiToolbarService,
                private api: ApiService,
                public _location: Location,
                private router: Router,
                private route: ActivatedRoute,
                private element: ElementRef) {
        this.info = {};
    }

    ngAfterViewInit() {
        this.toolbarService.set('Autor');
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

    getInfo() {
        this.api
            .prep('autor', 'selecionarPorId')
            .call({
                id: this.route.snapshot.params['id']
            })
            .subscribe(data => {
                Object.assign(this.info, data);
            }, error => {
                if (error.executionCode === 1) {
                    this.router.navigate(['/autor'], {replaceUrl: true});
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
                    .prep('autor', 'inserir')
                    .call(this.info)
                    .subscribe(data => {
                        window.history.replaceState(null, document.title, '/autor/' + data.id);
                        this.router.navigate(['/autor']);
                        UiSnackbar.show({
                            text: 'Autor inserido com sucesso'
                        });
                    }, () => {
                        this.saving = false;
                    });
            } else {
                this.api
                    .prep('autor', 'atualizar')
                    .call(this.info)
                    .subscribe(() => {
                        this.router.navigate(['/autor']);
                        UiSnackbar.show({
                            text: 'Autor alterado com sucesso'
                        });
                    }, error => {
                        this.saving = false;
                        switch (error.executionCode) {
                            case 1:
                                UiSnackbar.show({
                                    text: 'Autor não encontrado. Verifique se ele foi excluído.'
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
                .prep('autor', 'remover')
                .call({
                    id: this.info.id
                })
                .subscribe(() => {
                    this.router.navigate(['/autor']);
                    UiSnackbar.show({
                        text: 'Autor excluído com sucesso'
                    });
                }, error => {
                    this.deleting = false;
                    switch (error.executionCode) {
                        case 1:
                            UiSnackbar.show({
                                text: 'Autor não encontrado. Verifique se ele já não foi excluído.'
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
