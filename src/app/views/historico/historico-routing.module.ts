import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HistoricoComponent} from './historico.component';
import {HistoricoListComponent} from './list/list.component';
import {AuthGuard} from '../../core/guard/auth.guard';

const routes: Routes = [
    {
        path: 'historico', component: HistoricoComponent, canActivate: [AuthGuard],
        children: [
            {path: '', component: HistoricoListComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HistoricoRoutingModule {
}
