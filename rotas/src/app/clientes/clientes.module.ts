import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientesComponent } from './clientes.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import {  clientesRoutingmodule  } from './clientes.routing.module';
import { ClientesDeactivateGuard  } from './../guards/clientes-deactivate.guard';
import { ClienteDetalheResolver } from './guards/cliente-detalhe.resolver';


@NgModule({
    imports:[
        CommonModule,
        clientesRoutingmodule,
        FormsModule 
    ],
    exports:[],
    declarations:[ ClientesComponent, ClienteFormComponent, ClienteDetalheComponent],
    providers:[
        ClientesDeactivateGuard,
        ClienteDetalheResolver 
    ],
})

export class ClientesModule {}
