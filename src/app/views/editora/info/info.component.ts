import {Component, OnDestroy, OnInit, ElementRef} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

import {UiToolbarService, UiSnackbar} from 'ng-smn-ui';

import {ApiService} from '../../../core/api/api.service';

@Component({
    selector: 'app-editora-list',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss']
})

export class EditoraInfoComponent implements OnDestroy, OnInit {
    info: any;
    saving: boolean;
    deleting: boolean;
    addingNew: boolean;
    loading = true;

    constructor(private toolbarService: UiToolbarService,
                private api: ApiService,
                private _location: Location,
                private router: Router,
                private route: ActivatedRoute,
                private element: ElementRef) {
        this.info = {};
    }

    ngOnInit() {
        this.toolbarService.set('Editora');
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

    getInfo() {
        this.api
            .prep('editora', 'selecionarPorId')
            .call({
                id: this.route.snapshot.params['id']
            })
            .subscribe(
                data => {
                    Object.assign(this.info, data);
                }, error => {
                    switch (error.executionCode) {
                        case 1:
                            UiSnackbar.show({
                                text: error.message
                            });
                            this.goBack();
                            break;
                    }
                }, () => {
                    this.loading = false;
                }
            );
    }

    ngOnDestroy() {
        this.toolbarService.deactivateExtendedToolbar();
    }

    goBack() {
        if (sessionStorage.getItem('goBack')) {
            this._location.back();
        } else {
            this.router.navigate(['/editora']);
        }
    }

    onSubmit(form) {
        if (!this.saving) {
            for (const control in form.controls) {
                if (form.controls.hasOwnProperty(control)) {
                    form.controls[control].markAsTouched();
                    form.controls[control].markAsDirty();
                }
            }

            if (!form.valid) {
                this.element.nativeElement.querySelectorAll('form .ng-invalid')[0].focus();
                return false;
            }

            this.saving = true;

            if (this.addingNew) {
                this.api
                    .prep('editora', 'inserir')
                    .call(this.info)
                    .subscribe((data) => {
                        this.router.navigate(['/editora/', data.id]);
                        this.router.navigate(['/editora']);
                        UiSnackbar.show({
                            text: 'Editora inserida com sucesso'
                        });
                    }, (error) => {
                        this.saving = false;
                        switch (error.executionCode) {
                            case 1:
                                setTimeout(() => {
                                    this.element.nativeElement.querySelectorAll('input[name="cnpj"]')[0].focus();
                                });
                                form.controls['cnpj'].setErrors({existingCnpj: true});
                                break;
                        }
                    });
            } else {
                this.api
                    .prep('editora', 'atualizar')
                    .call(this.info)
                    .subscribe(() => {
                        this.router.navigate(['/editora']);
                        UiSnackbar.show({
                            text: 'Editora alterada com sucesso'
                        });
                    }, (error) => {
                        this.saving = false;
                        switch (error.executionCode) {
                            case 2:
                                this.element.nativeElement.querySelectorAll('input[name="logon"]')[0].focus();
                                form.controls['logon'].setErrors({existingLogon: true});
                                break;
                            case 3:
                                this.element.nativeElement.querySelectorAll('input[name="idSuperior"]')[0].focus();
                                form.controls['idSuperior'].setErrors({notFound: true});
                                UiSnackbar.show({
                                    text: 'Usuário superior não encontrado. Verifique se ele não foi excluído.'
                                });
                                break;
                            case 4:
                                this.element.nativeElement.querySelectorAll('input[name="idGrupo"]')[0].focus();
                                form.controls['idGrupo'].setErrors({notFound: true});
                                UiSnackbar.show({
                                    text: 'Grupo não encontrado. Verifique se ele não foi excluído.'
                                });
                                break;
                            case 5:
                            case 1:
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
                .prep('editora', 'remover')
                .call({
                    id: this.info.id
                })
                .subscribe(() => {
                    this.router.navigate(['/editora']);
                    UiSnackbar.show({
                        text: 'Editora excluída com sucesso'
                    });
                }, (error) => {
                    this.deleting = false;
                    switch (error.executionCode) {
                        case 1:
                            UiSnackbar.show({
                                text: 'Editora não encontrada. Verifique se ela já não foi excluída.'
                            });
                            break;
                    }
                });
        }
    }
}
