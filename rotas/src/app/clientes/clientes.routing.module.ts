import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClientesDeactivateGuard  } from './../guards/clientes-deactivate.guard';
import { ClienteDetalheResolver } from './guards/cliente-detalhe.resolver';

const clientesRoutes = [
    { path:'', component: ClientesComponent, children: [
        { path: 'novo', component: ClienteFormComponent },
        { path:':id', component: ClienteDetalheComponent, 
        resolve: { cliente : ClienteDetalheResolver } },
        { path:':id/editar', component: ClienteFormComponent, canDeactivate:[ClientesDeactivateGuard] } 
    ] },
    
];

@NgModule({
    imports: [RouterModule.forChild(clientesRoutes)],
    exports:[RouterModule ]
})

export class clientesRoutingmodule { }
