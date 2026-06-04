import { Component} from '@angular/core';
import { ProjectsService } from '../../service/data';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
})
export class Projects {
  constructor(private projectService:ProjectsService)
  {
    this.projectService.getProjects().subscribe({
      next: (data) => console.log(data),
      error: (error) => console.error(error),
      complete: () => console.info('complete') 
    })
  }
}

