import { Component, inject } from '@angular/core';
import {Datos} from '../../servicios/datos'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
})
export class Projects {
  private datos = inject(Datos) 
  proyectos = this.datos.devolverObjeto()
}
