import {Component, Input} from '@angular/core';
import {FireBaseServiceService} from '../../service/fire-base-service.service';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: '../employee-card/employee-card.component.css'
})
export class ProjectCardComponent {
  @Input() id: string = '1';
  @Input() name: string = 'nombre';
  @Input() description: string = 'description';

  constructor(private firebaseService: FireBaseServiceService) {}

  deleteProject(projectId: string) {
    this.firebaseService.deleteProject(projectId).then(() => console.log('Employee deleted successfully.'));
  }
}
