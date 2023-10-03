import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { AddEditProductoComponent } from './componentes/add-edit-producto/add-edit-producto.component';

const routes: Routes = [

  { path: '', component: ListaProductosComponent },
  { path: 'add', component: AddEditProductoComponent },
  {path: 'edit/:id',component: AddEditProductoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
