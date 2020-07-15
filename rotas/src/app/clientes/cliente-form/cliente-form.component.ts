import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../clientes.service';



@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  cliente:any = {};
  inscricao: Subscription;
  private formMudou: boolean = false;

  constructor(
    private route:ActivatedRoute,
    private clientesService: ClientesService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params:any) => {
        let id = params['id'];

        this.cliente = this.clientesService.getCliente(id);

        if(this.cliente === null){
            this.cliente = {};
        }
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  onInput(){
   
    this.formMudou = true;
    console.log('mudou')
  }
  
  podeMudarRota(){
    if(this.formMudou){
        confirm('Quaisquer modificações não serão salvas')
    }
    return true;
  }

  podeDesativar(){
    return this.podeMudarRota();
  }

}
