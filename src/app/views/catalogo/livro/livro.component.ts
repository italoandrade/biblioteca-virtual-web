import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../../core/api/api.service';
import {UiToolbarService, UiSnackbar} from 'ng-smn-ui';
import {Location} from '@angular/common';
import {UsuarioService} from '../../../core/services/usuario.service';

@Component({
    moduleId: module.id,
    selector: 'app-catalogo-livro',
    templateUrl: 'livro.component.html',
    styleUrls: ['livro.component.scss']
})

export class CatalogoLivroComponent implements OnInit, AfterViewInit, OnDestroy {
    info: any;
    saving: boolean;
    deleting: boolean;
    addingNew: boolean;
    loading = true;
    autores;
    editoras;
    @ViewChild('inputNovaImagem') inputNovaImagem;
    nextWeek;

    constructor(private toolbarService: UiToolbarService,
                private api: ApiService,
                public _location: Location,
                private router: Router,
                private route: ActivatedRoute,
                private usuarioService: UsuarioService) {
        this.info = {};
        this.autores = [];
        this.editoras = [];
        this.nextWeek =  new Date().setDate(new Date().getDate() + 7);
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.toolbarService.set('Livro');
        this.toolbarService.activateExtendedToolbar(600);

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
            .prep('livro', 'selecionarPorId')
            .call({
                id: this.route.snapshot.params['id']
            })
            .subscribe(data => {
                Object.assign(this.info, data);
            }, error => {
                if (error.executionCode === 1) {
                    this.router.navigate(['/catalogo'], {replaceUrl: true});
                    UiSnackbar.show({
                        text: error.message
                    });
                }
            }, () => {
                this.loading = false;
            });
    }

    efetuarEmprestimo() {
        if (this.usuarioService.get()) {
            this.saving = true;

            this.api
                .prep('catalogo', 'efetuarEmprestimo')
                .call({
                    id: this.route.snapshot.params['id']
                })
                .subscribe(data => {
                    UiSnackbar.show({
                        text: 'Empréstimo efetuado com sucesso'
                    });
                }, null, () => {
                    this.saving = false;
                });
        } else {
            this.router.navigate(['/signin']);
        }
    }
}
