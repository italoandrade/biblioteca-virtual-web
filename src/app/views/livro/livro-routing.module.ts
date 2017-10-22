import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LivroComponent} from './livro.component';
import {LivroListComponent} from './list/list.component';
import {LivroInfoComponent} from './info/info.component';
import {AuthGuard} from '../../core/guard/auth.guard';

const routes: Routes = [
    {
        path: 'livro', component: LivroComponent, canActivate: [AuthGuard],
        children: [
            {path: '', component: LivroListComponent},
            {path: 'novo', component: LivroInfoComponent},
            {path: 'nova', redirectTo: 'novo'},
            {path: ':id', component: LivroInfoComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LivroRoutingModule {
}
