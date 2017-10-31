import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EmprestimoComponent} from './emprestimo.component';
import {EmprestimoListComponent} from './list/list.component';
import {AuthGuard} from '../../core/guard/auth.guard';

const routes: Routes = [
    {
        path: 'emprestimo', component: EmprestimoComponent, canActivate: [AuthGuard],
        children: [
            {path: '', component: EmprestimoListComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmprestimoRoutingModule {
}
