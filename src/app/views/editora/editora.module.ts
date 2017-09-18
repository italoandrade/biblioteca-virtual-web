import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {SharedModule} from '../../shared.module';
import {EditoraRoutingModule} from './editora-routing.module';

import {EditoraComponent} from './editora.component';
import {EditoraListComponent} from './list/list.component';
import {EditoraInfoComponent} from './info/info.component';

@NgModule({
    imports: [
        SharedModule,
        EditoraRoutingModule
    ],
    declarations: [
        EditoraComponent,
        EditoraListComponent,
        EditoraInfoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditoraModule {
}
