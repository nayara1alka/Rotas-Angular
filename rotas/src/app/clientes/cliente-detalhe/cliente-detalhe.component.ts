import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.css']
})
export class ClienteDetalheComponent implements OnInit {

  cliente:any;
  inscricao:Subscription;

  constructor(
    private route: ActivatedRoute,
    private clientesService: ClientesService,
    private router : Router
  ) { }

  ngOnInit(): void {
   console.log('ngOnInit:  ClienteDetalheComponent')

    this.inscricao = this.route.data.subscribe(
      (info: {cliente: Cliente} ) => {
        console.log('Recebendo o obj Aluno do resolver');
        this.cliente = info.cliente;
      }
    );
  }

  editarContato(){
    this.router.navigate(['/clientes' , this.cliente.id , 'editar']);
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
