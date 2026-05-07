import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from "./componentes/about/about";
import { Contacts } from "./componentes/contacts/contacts";
import { Inicio } from "./componentes/inicio/inicio";
import { Navbar } from "./componentes/navbar/navbar";
import { Projects } from "./componentes/projects/projects";
import { Header } from './componentes/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, About, Contacts, Inicio, Navbar, Projects, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio');
}
