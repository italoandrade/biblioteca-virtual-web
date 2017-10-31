import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {SharedModule} from '../../shared.module';
import {EmprestimoRoutingModule} from './emprestimo-routing.module';

import {EmprestimoComponent} from './emprestimo.component';
import {EmprestimoListComponent} from './list/list.component';

@NgModule({
    imports: [
        SharedModule,
        EmprestimoRoutingModule
    ],
    declarations: [
        EmprestimoComponent,
        EmprestimoListComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmprestimoModule {
}
