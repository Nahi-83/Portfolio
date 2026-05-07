import { Routes } from '@angular/router';
import { Navbar} from './componentes/navbar/navbar';
import { Inicio} from './componentes/inicio/inicio';
import { About} from './componentes/about/about';
import { Projects } from './componentes/projects/projects';
import { Contacts } from './componentes/contacts/contacts';
import { Header} from './componentes/header/header';

export const routes: Routes = [
    {path: 'navbar', component: Navbar},
    {path: 'inicio', component: Inicio},
    {path: 'about', component: About},
    {path: 'project', component: Projects},
    {path: 'contacts', component: Contacts},
    {path: 'header', component: Header},
];
