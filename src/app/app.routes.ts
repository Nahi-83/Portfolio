import { Routes } from '@angular/router';
import { Navbar} from './layout/navbar/navbar';
import { Inicio} from './pages/inicio/inicio';
import { About} from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Contacts } from './pages/contacts/contacts';


export const routes: Routes = [
    {path: 'navbar', component: Navbar},
    {path: 'inicio', component: Inicio},
    {path: 'about', component: About},
    {path: 'projects', component: Projects},
    {path: 'contacts', component: Contacts},
];
