import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes: Cliente[] = [
    {id: 1, nome: 'Cliente 1', email: 'cliente1@email.com'},
    {id: 2, nome: 'Cliente 2', email: 'cliente2@email.com'},
    {id: 3, nome: 'Cliente 3', email: 'cliente3@email.com'}
  ];

 
  constructor() { }

  getClientes(){
    return this.clientes;
  }


  getCliente(id: number){
    let clientes = this.getClientes();
    for(let i = 0; i < clientes.length; i++){
      let cliente = clientes[i];
      if(cliente.id == id){
        return cliente;
      }
    }
    return null;

  }
}
