import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {SharedModule} from '../../shared.module';
import {AutorRoutingModule} from './autor-routing.module';

import {AutorComponent} from './autor.component';
import {AutorListComponent} from './list/list.component';
import {AutorInfoComponent} from './info/info.component';

@NgModule({
    imports: [
        SharedModule,
        AutorRoutingModule
    ],
    declarations: [
        AutorComponent,
        AutorListComponent,
        AutorInfoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AutorModule {
}
