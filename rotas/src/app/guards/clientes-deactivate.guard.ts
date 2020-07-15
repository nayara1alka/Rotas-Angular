import { ClienteFormComponent } from './../clientes/cliente-form/cliente-form.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate  } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IFormCanDeactivate } from './iform-candeactivate';

@Injectable()
export class ClientesDeactivateGuard implements CanDeactivate<IFormCanDeactivate>{

    canDeactivate(
        component: IFormCanDeactivate,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> | Promise<boolean> | boolean {

        console.log('guarda de desativacao')

        return component.podeDesativar();
    }

}