import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RoupasService } from '../roupas.service';

@Component({
  selector: 'app-roupa-detalhe',
  templateUrl: './roupa-detalhe.component.html',
  styleUrls: ['./roupa-detalhe.component.css']
})
export class RoupaDetalheComponent implements OnInit {

  id:number;
  inscricao: Subscription;
  roupa: any;

  constructor(private route: ActivatedRoute,
    private roupasService: RoupasService,
    private router: Router ) { 
    
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.roupa = this.roupasService.getRoupa(this.id);

        if(this.roupa == null){
            this.router.navigate(['/roupas/naoEncontrado']);
        }
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
