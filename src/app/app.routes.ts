import { Routes } from '@angular/router';
import { Navbar} from './layout/navbar/navbar';
import { Inicio} from './pages/inicio/inicio';
import { About} from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Contacts } from './pages/contacts/contacts';
import { Register } from './pages/register/register';
import { FormProyect } from './pages/form-proyect/form-proyect';



export const routes: Routes = [
    {path: '', redirectTo:"inicio", pathMatch:'full'},
    {path: 'navbar', component: Navbar},
    {path: 'inicio', component: Inicio},
    {path: 'about', component: About},
    {path: 'projects', component: Projects},
    {path: 'contacts', component: Contacts},
    {path: 'register', component: Register},
    {path: 'form-proyect', component: FormProyect}
];
