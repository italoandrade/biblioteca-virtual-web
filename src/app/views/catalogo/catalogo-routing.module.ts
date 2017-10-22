import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CatalogoComponent} from './catalogo.component';
import {CatalogoLivroComponent} from './livro/livro.component';

const routes: Routes = [
    {
        path: 'catalogo', component: CatalogoComponent
    },
    {
        path: 'catalogo/livro/:id', component: CatalogoLivroComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CatalogoRoutingModule {
}
