import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent {
  // propiedades que se le envian al componente
  // @Input('nombreDelinput') personajes: Personaje[] = [];
  // @Input() personajes: Personaje[] = [];

  get personajes() {
    return this.dbzService.personajes;
  }

  // usa la misma inicializacion que esta en main-page
  constructor(private dbzService: DbzService) {}
}
