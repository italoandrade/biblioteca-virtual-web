import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EditoraComponent} from './editora.component';
import {EditoraListComponent} from './list/list.component';
import {EditoraInfoComponent} from './info/info.component';
import {AuthGuard} from '../../core/guard/auth.guard';

const routes: Routes = [
    {
        path: 'editora', component: EditoraComponent, canActivate: [AuthGuard],
        children: [
            {path: '', component: EditoraListComponent},
            {path: 'nova', component: EditoraInfoComponent},
            {path: 'novo', redirectTo: 'nova'},
            {path: ':id', component: EditoraInfoComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditoraRoutingModule {
}
