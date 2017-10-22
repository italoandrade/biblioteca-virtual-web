import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {SharedModule} from '../../shared.module';
import {LivroRoutingModule} from './livro-routing.module';

import {LivroComponent} from './livro.component';
import {LivroListComponent} from './list/list.component';
import {LivroInfoComponent} from './info/info.component';

@NgModule({
    imports: [
        SharedModule,
        LivroRoutingModule
    ],
    declarations: [
        LivroComponent,
        LivroListComponent,
        LivroInfoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LivroModule {
}
