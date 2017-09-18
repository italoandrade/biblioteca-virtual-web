import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ClienteComponent} from './cliente.component';
import {ClienteListComponent} from './list/list.component';
import {ClienteInfoComponent} from './info/info.component';
import {AuthGuard} from '../../core/guard/auth.guard';

const routes: Routes = [
    {
        path: 'cliente', component: ClienteComponent, canActivate: [AuthGuard],
        children: [
            {path: '', component: ClienteListComponent},
            {path: ':id', component: ClienteInfoComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClienteRoutingModule {
}
