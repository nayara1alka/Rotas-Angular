import { Cliente } from './../cliente';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router'
import { Observable } from 'rxjs';
import { ClientesService } from './../clientes.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ClienteDetalheResolver implements Resolve<Cliente> {

    constructor(private clientesService : ClientesService ){}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {

        console.log('ClienteDetalheResolver ')

        let id = route.params['id'];

        return this.clientesService.getCliente(id);

    }

}