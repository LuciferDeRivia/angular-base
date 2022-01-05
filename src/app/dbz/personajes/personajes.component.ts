import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent {
  // propiedades que se le envian al componente
  // @Input('nombreDelinput') personajes: Personaje[] = [];
  @Input() personajes: Personaje[] = [];
}
