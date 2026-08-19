import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectsService } from '../../service/data'; 

@Component({
  selector: 'app-form-proyect',
  imports: [ReactiveFormsModule],
  templateUrl: './form-proyect.html',
  styleUrl: './form-proyect.css',
})
export class FormProyect {

  private projectService = inject(ProjectsService);
  private formBuilder = inject(FormBuilder);

  projectForm = this.formBuilder.group({
    tituloProyecto: ['', [Validators.required, Validators.minLength(4)]],
    descripcion: ['', [Validators.required, Validators.minLength(10)]],
    rol: ['', [Validators.required]],
    tecnologias: ['', [Validators.required]],
    
  });

  get TituloProyecto() {
    return this.projectForm.get('tituloProyecto');
  }

  get Descripcion() {
    return this.projectForm.get('descripcion');
  }

  get Rol() {
    return this.projectForm.get('rol');
  }

  get Tecnologias() {
    return this.projectForm.get('tecnologias');
  }

  get Link() {
    return this.projectForm.get('link');
  }

  agregarProyecto() {

    // Si el formulario NO es válido
    if (this.projectForm.invalid) {

      this.projectForm.markAllAsTouched();

      return;

    }
      // Si el formulario es válido se puede agregar a la base de datos. 
    this.projectService.addProject(this.projectForm.value).subscribe({

      next: (data) => {

        console.log("Proyecto agregado:", data);

        alert("Proyecto agregado correctamente");

     // Una vez que se agregue el proyecto, se limpia el formulario.
        this.projectForm.reset();

      },

      error: (error) => {

        console.error("Error al agregar el proyecto:", error);

        alert("No se pudo agregar el proyecto.");

      }
    });
  }
}

