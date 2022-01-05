import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  // componentes que se estan utilizando
  declarations: [AppComponent],
  // otros modulos de la aplicación
  imports: [BrowserModule, HeroesModule, ContadorModule, DbzModule],
  // servicios especificos a un modulo
  providers: [],
  // modulo inicial
  bootstrap: [AppComponent],
})
export class AppModule {}
