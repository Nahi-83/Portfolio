import { Routes } from '@angular/router';
import { Navbar} from './componentes/navbar/navbar';
import { Inicio} from './componentes/inicio/inicio';
import { About} from './componentes/about/about';
import { Projects } from './componentes/projects/projects';
import { Contacts } from './componentes/contacts/contacts';


export const routes: Routes = [
    {path: 'navbar', component: Navbar},
    {path: '', component: Inicio},
    {path: 'about', component: About},
    {path: 'projects', component: Projects},
    {path: 'contacts', component: Contacts},
];
