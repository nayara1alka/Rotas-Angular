import { NgModule } from '@angular/core';

import { RoupasComponent } from './roupas.component';
import { RoupaDetalheComponent } from './roupa-detalhe/roupa-detalhe.component'
import { RoupaNaoEncontradaComponent } from './roupa-nao-encontrada/roupa-nao-encontrada.component'
import { RoupasService } from './roupas.service';
import { CommonModule } from '@angular/common';
import { RoupasRoutingModule } from './roupas.routing.module';

@NgModule({
    imports:[
        CommonModule,
        RoupasRoutingModule
    ],
    exports: [],
    declarations:[
        RoupasComponent,
        RoupaDetalheComponent,
        RoupaNaoEncontradaComponent
    ],
    providers: [
        RoupasService
    ]
})

export class RoupasModule {}
