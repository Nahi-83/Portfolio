import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-register',
   standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  private formBuilder = inject(FormBuilder);

  registerForm = this.formBuilder.group({
    nombreUsuario: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    contraseña: ['', [Validators.required, Validators.minLength(6)]],
    confirmarContraseña: ['', [Validators.required, Validators.minLength(6)]]
  })

  get NombreUsuario(){
    return this.registerForm.get("nombreUsuario");
  }

  get Email(){
    return this.registerForm.get('email');
  }

  registrarse() {
    if (this.registerForm.valid){
      alert("Formulario válido")
      console.log(this.registerForm.value)
    }
    else {
      alert("Formulario no válido")
    }
   }
  }
 

  
















  