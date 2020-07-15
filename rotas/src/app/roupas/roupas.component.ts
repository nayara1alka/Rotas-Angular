import { Component, OnInit } from '@angular/core';
import { RoupasService } from './roupas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { timers } from 'jquery';

@Component({
  selector: 'app-roupas',
  templateUrl: './roupas.component.html',
  styleUrls: ['./roupas.component.css']
})
export class RoupasComponent implements OnInit {

  roupas: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(private roupasService: RoupasService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    this.roupas = this.roupasService.getRoupas();

    this.inscricao = this.route.queryParams.subscribe(
      ( queryParams:any ) => {
        this.pagina = queryParams['pagina'];
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  proximaPagina(){
    this.pagina++;
    this.router.navigate(['/roupas'],
    {queryParams:{'pagina': ++this.pagina}});
  }

}
