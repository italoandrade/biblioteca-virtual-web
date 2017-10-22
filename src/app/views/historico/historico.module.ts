import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {SharedModule} from '../../shared.module';
import {HistoricoRoutingModule} from './historico-routing.module';

import {HistoricoComponent} from './historico.component';
import {HistoricoListComponent} from './list/list.component';

@NgModule({
    imports: [
        SharedModule,
        HistoricoRoutingModule
    ],
    declarations: [
        HistoricoComponent,
        HistoricoListComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HistoricoModule {
}
