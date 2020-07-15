import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoupasComponent } from './roupas.component';
import { RoupaDetalheComponent } from './roupa-detalhe/roupa-detalhe.component';
import { RoupaNaoEncontradaComponent } from './roupa-nao-encontrada/roupa-nao-encontrada.component';


const roupasRoutes: Routes = [
  { path:'', component: RoupasComponent },
  { path:'naoEncontrado', component: RoupaNaoEncontradaComponent },
  { path:':id', component: RoupaDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forChild(roupasRoutes)],
  exports: [RouterModule]
})
export class RoupasRoutingModule { }
