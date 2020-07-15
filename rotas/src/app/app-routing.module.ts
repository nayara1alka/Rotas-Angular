import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { RoupasGuard } from './guards/roupas.guard';
import { ClientesGuard } from './guards/clientes.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  { path:'roupas', loadChildren: () => import('./roupas/roupas.module').then(m => m.RoupasModule),
   canActivate:[AuthGuard], canActivateChild:[RoupasGuard], canLoad: [AuthGuard]},

  { path:'clientes', loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule),
   canActivate:[AuthGuard], canActivateChild:[ClientesGuard] , canLoad: [AuthGuard]},

  { path:'login', component:LoginComponent },

  { path: 'home', component: HomeComponent,
  canActivate:[AuthGuard] },

  { path: '', redirectTo: '/home', pathMatch:'full' },

  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
