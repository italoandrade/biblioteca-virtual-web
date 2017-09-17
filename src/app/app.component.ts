import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';

import {UiToolbarService, UiCookie, UiColor} from 'ng-smn-ui';

import {UsuarioService} from './core/services/usuario.service';
import {ApiService} from './core/api/api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    title: string;
    menuOpen: boolean;
    usuario: any;
    isBright = UiColor.isBright;

    constructor(private titleService: Title,
                private toolbarService: UiToolbarService,
                private usuarioService: UsuarioService,
                private api: ApiService,
                private router: Router,
                private route: ActivatedRoute) {
        toolbarService.change.subscribe(title => this.title = title);
        usuarioService.change.subscribe(user => this.usuario = user);
    }

    ngOnInit() {
        this.titleService.setTitle('Biblioteca Virtual');
        this.toolbarService.set('Biblioteca Virtual');

        this.usuarioService.relogin();

        if (UiCookie.get('NavDrawerPersistent') === 'true') {
            this.menuOpen = true;
        }

        this.toolbarService.registerMainToolbar(document.getElementById('app-header'));
    }

    signOut() {
        UiCookie.delete('BIVI');
        this.usuarioService.relogin();

        const currentRouteConfig = this.router.config.find(f => f.path === this.router.url.substr(1));
        if (currentRouteConfig != null && currentRouteConfig.canActivate != null) {
            this.router.navigate(['/']);
        }
    }
}

/**/
