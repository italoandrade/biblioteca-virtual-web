import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {SharedModule} from '../../shared.module';
import {CatalogoRoutingModule} from './catalogo-routing.module';

import {CatalogoComponent} from './catalogo.component';
import {CatalogoLivroComponent} from './livro/livro.component';

@NgModule({
    imports: [
        SharedModule,
        CatalogoRoutingModule
    ],
    declarations: [
        CatalogoComponent,
        CatalogoLivroComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CatalogoModule {
}
