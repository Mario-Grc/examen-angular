import {Component, Input} from '@angular/core';
import {FireBaseServiceService} from '../../service/fire-base-service.service';

@Component({
  selector: 'app-employee-card',
  imports: [],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css'
})
export class EmployeeCardComponent {
  @Input() id: string = 'id';
  @Input() name: string = 'name';
  @Input() department: string = 'department';

  constructor(private firebaseService: FireBaseServiceService) {}

  deleteEmployee(employeeId: string) {
    this.firebaseService.deleteEmployee(employeeId).then(() => console.log('Employee deleted successfully.'));
  }
}
