import { ChangeDetectorRef, Component} from '@angular/core';
import { ProjectsService } from '../../service/data';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  projectsList: any

  constructor(private projectService:ProjectsService, private cdr:ChangeDetectorRef)
  {
    this.projectService.getProjects().subscribe({
      next: (data) => 
      { console.log(data)
        this.projectsList=data;   
      },
      error: (error) => console.error(error),
      complete: () => {
        console.info('complete')
        this.cdr.detectChanges()
      }
    })
  }
}

