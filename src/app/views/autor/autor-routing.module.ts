import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AutorComponent} from './autor.component';
import {AutorListComponent} from './list/list.component';
import {AutorInfoComponent} from './info/info.component';
import {AuthGuard} from '../../core/guard/auth.guard';

const routes: Routes = [
    {
        path: 'autor', component: AutorComponent, canActivate: [AuthGuard],
        children: [
            {path: '', component: AutorListComponent},
            {path: 'novo', component: AutorInfoComponent},
            {path: 'nova', redirectTo: 'novo'},
            {path: ':id', component: AutorInfoComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AutorRoutingModule {
}
