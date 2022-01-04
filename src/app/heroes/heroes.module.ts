import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  // que componentes contienen este componente
  declarations: [HeroeComponent, ListadoComponent],
  // que cosas quiero que sean visibles fuera de este modulo
  exports: [ListadoComponent],
  // modulos
  imports: [
    CommonModule, // agregar directivas como *ngIf *ngFor entre otras
  ],
})
export class HeroesModule {}
