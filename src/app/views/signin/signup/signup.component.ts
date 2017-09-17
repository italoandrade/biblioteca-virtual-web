import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

import {UiToolbarService, UiCookie} from 'ng-smn-ui';

import {ApiService} from '../../../core/api/api.service';
import {UsuarioService} from '../../../core/services/usuario.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['../signin.component.scss']
})
export class SignUpComponent implements OnInit, AfterViewInit, OnDestroy {
    showPassword: boolean;
    showConfirmarSenha: boolean;
    info: any;
    submitting: boolean;

    constructor(private toolbarService: UiToolbarService,
                private titleService: Title,
                private api: ApiService,
                private router: Router,
                private usuarioService: UsuarioService,
                private element: ElementRef,
                private _location: Location) {
        this.info = {};
    }

    ngOnInit() {
        if (UiCookie.get('BIVI')) {
            this.router.navigate(['']);
        }

        this.titleService.setTitle('Cadastro');
        this.toolbarService.set('Cadastro');
    }

    ngAfterViewInit() {
        this.toolbarService.activateTransparentToolbar();

        this.element.nativeElement.querySelectorAll('input[name="nome"]')[0].focus();
    }

    ngOnDestroy() {
        this.toolbarService.deactivateTransparentToolbar();
    }

    onSubmit(form) {
        if (!this.submitting) {
            for (const control in form.controls) {
                if (form.controls.hasOwnProperty(control)) {
                    form.controls[control].markAsTouched();
                    form.controls[control].markAsDirty();
                }
            }

            if (this.info.senha !== this.info.confirmarSenha) {
                this.element.nativeElement.querySelectorAll('input[name="confirmarSenha"]')[0].focus();
                form.controls['confirmarSenha'].setErrors({wrongConfirmation: true});
                return false;
            }

            if (!form.valid) {
                this.element.nativeElement.querySelectorAll('form .ng-invalid')[0].focus();
                return false;
            }

            this.submitting = true;

            this.api
                .prep('usuario', 'signup')
                .call(this.info)
                .subscribe(
                    (data) => {
                        UiCookie.set('BIVI', data.token);
                        this.usuarioService.set(data);
                        this.router.navigate(['']);
                    }, (error) => {
                        this.submitting = false;
                        switch (error.executionCode) {
                            case 1:
                                this.element.nativeElement.querySelectorAll('input[name="confirmarSenha"]')[0].focus();
                                form.controls['confirmarSenha'].setErrors({wrongConfirmation: true});
                                break;
                            case 2:
                                this.element.nativeElement.querySelectorAll('input[name="email"]')[0].focus();
                                form.controls['email'].setErrors({existingEmail: true});
                        }
                    }
                );
        }
    }

    goBack(e) {
        e.preventDefault();
        if (sessionStorage.getItem('goBack')) {
            sessionStorage.removeItem('goBack');
            this._location.back();
        } else {
            this.router.navigate(['/signin']);
        }
    }

    goToRecover(e) {
        e.preventDefault();
        sessionStorage.setItem('goBack', 'true');
        sessionStorage.setItem('emailToRecover', this.info.email);
        this.router.navigate(['/recover']);
    }
}
