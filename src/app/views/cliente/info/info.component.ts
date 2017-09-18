import {Component, OnDestroy, OnInit, ElementRef} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

import {UiToolbarService, UiSnackbar} from 'ng-smn-ui';

import {ApiService} from '../../../core/api/api.service';

@Component({
    selector: 'app-cliente-list',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss']
})

export class ClienteInfoComponent implements OnDestroy, OnInit {
    info;
    saving: boolean;
    loading = true;
    estados;
    buscandoCep: boolean;

    constructor(private toolbarService: UiToolbarService,
                private api: ApiService,
                private _location: Location,
                private router: Router,
                private route: ActivatedRoute,
                private element: ElementRef) {
        this.info = {};
        this.estados = [];
    }

    ngOnInit() {
        this.toolbarService.set('Cliente');
        this.toolbarService.activateExtendedToolbar(960);

        this.getInfo();
        this.getEstados();
    }

    getInfo() {
        this.api
            .prep('cliente', 'selecionarPorId')
            .call({
                id: this.route.snapshot.params['id']
            })
            .subscribe(data => {
                Object.assign(this.info, data);
            }, error => {
                if (error.status === 401) {
                    return this.router.navigate(['']);
                }

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
            });
    }

    getEstados() {
        this.estados = [
            {uf: 'AC', nome: 'Acre'},
            {uf: 'AL', nome: 'Alagoas'},
            {uf: 'AP', nome: 'Amapá'},
            {uf: 'AM', nome: 'Amazonas'},
            {uf: 'BA', nome: 'Bahia'},
            {uf: 'CE', nome: 'Ceará'},
            {uf: 'DF', nome: 'Distrito Federal'},
            {uf: 'ES', nome: 'Espírito Santo'},
            {uf: 'GO', nome: 'Goiás'},
            {uf: 'MA', nome: 'Maranhão'},
            {uf: 'MT', nome: 'Mato Grosso'},
            {uf: 'MS', nome: 'Mato Grosso do Sul'},
            {uf: 'MG', nome: 'Minas Gerais'},
            {uf: 'PA', nome: 'Pará'},
            {uf: 'PB', nome: 'Paraíba'},
            {uf: 'PR', nome: 'Paraná'},
            {uf: 'PE', nome: 'Pernambuco'},
            {uf: 'PI', nome: 'Piauí'},
            {uf: 'RJ', nome: 'Rio de Janeiro'},
            {uf: 'RN', nome: 'Rio Grande do Norte'},
            {uf: 'RS', nome: 'Rio Grande do Sul'},
            {uf: 'RO', nome: 'Rondônia'},
            {uf: 'RR', nome: 'Roraima'},
            {uf: 'SC', nome: 'Santa Catarina'},
            {uf: 'SP', nome: 'São Paulo'},
            {uf: 'SE', nome: 'Sergipe'},
            {uf: 'TO', nome: 'Tocantins'}
        ]
    }

    getCep() {
        if (!this.buscandoCep) {
            this.buscandoCep = true;

            this.api
                .prep('cep', 'selecionar')
                .call({
                    cep: this.info.cep
                })
                .subscribe(data => {
                    delete data.cep;
                    data.endereco = data.logradouro;

                    Object.assign(this.info, data);
                }, null, () => {
                    this.buscandoCep = false;
                });
        }
    }

    ngOnDestroy() {
        this.toolbarService.deactivateExtendedToolbar();
    }

    goBack() {
        if (sessionStorage.getItem('goBack')) {
            this._location.back();
        } else {
            this.router.navigate(['/cliente']);
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

            this.api
                .prep('cliente', 'atualizar')
                .call(this.info)
                .subscribe(() => {
                    this.router.navigate(['/cliente']);
                    UiSnackbar.show({
                        text: 'Cliente alterado com sucesso'
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
