import {CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {SharedModule} from './shared.module';
import {AppRoutingModule} from './app-routing.module';

import {ApiService} from './core/api/api.service';
import {AuthGuard} from './core/guard/auth.guard';
import {UsuarioService} from './core/services/usuario.service';

import {SignInModule} from './views/signin/signin.module';
import {NotFoundModule} from './views/not-found/not-found.module';
import {HomeModule} from './views/home/home.module';
import {ClienteModule} from './views/cliente/cliente.module';
import {EditoraModule} from './views/editora/editora.module';
import {AutorModule} from './views/autor/autor.module';
import {LivroModule} from './views/livro/livro.module';
import {CatalogoModule} from './views/catalogo/catalogo.module';
import {HistoricoModule} from './views/historico/historico.module';
import {EmprestimoModule} from './views/emprestimo/emprestimo.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        SharedModule,

        SignInModule,
        HomeModule,
        NotFoundModule,
        ClienteModule,
        EditoraModule,
        AutorModule,
        LivroModule,
        CatalogoModule,
        HistoricoModule,
        EmprestimoModule,

        AppRoutingModule
    ],
    providers: [
        ApiService,
        AuthGuard,
        UsuarioService,
        {provide: LOCALE_ID, useValue: 'pt-BR'}
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
