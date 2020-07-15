import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoupasService {

  getRoupas(){
    return [
      {id: 1 , nome: 'Calça'},
      {id: 2 , nome: 'Blusa'}
    ];
  }

  getRoupa(id: number){
    let roupas = this.getRoupas();
    for(let i = 0; i < roupas.length; i++){
      let roupa = roupas[i];
      if(roupa.id == id){
        return roupa;
      }
    }
    return null;

  }

  constructor() { }
}
