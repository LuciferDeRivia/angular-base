import { Component } from '@angular/core';

@Component({
  // nombre de la etiqueta (nombre) html del componente
  selector: 'app-root',
  // path donde se encuentra el archivo html, para utilizar un archivo externo para el html
  templateUrl: './app.component.html',
  // template : '' // permite agregar html directamente en este archivo
  // path donde se encuentra el css de html del componente, para utilizar css en un archivo externo
  styleUrls: ['./app.component.css'],
  // styles: `` // permite agregar css directamente en este archivo
})
export class AppComponent {}
