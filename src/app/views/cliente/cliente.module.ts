import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {SharedModule} from '../../shared.module';
import {ClienteRoutingModule} from './cliente-routing.module';

import {ClienteComponent} from './cliente.component';
import {ClienteListComponent} from './list/list.component';
import {ClienteInfoComponent} from './info/info.component';

@NgModule({
    imports: [
        SharedModule,
        ClienteRoutingModule
    ],
    declarations: [
        ClienteComponent,
        ClienteListComponent,
        ClienteInfoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClienteModule {
}
