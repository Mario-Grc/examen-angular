import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {EmployeeCardComponent} from '../employee-card/employee-card.component';
import {Employee} from '../../model/employee';
import {FireBaseServiceService} from '../../service/fire-base-service.service';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-employee-form',
  imports: [
    FormsModule,
    EmployeeCardComponent,
    NgForOf,
    RouterLink
  ],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent implements OnInit {
  id: string = '';
  name: string = '';
  department: string = '';

  employeeList: Employee[] = [];
  constructor(private firebaseService: FireBaseServiceService) {}

  onSubmit(){
    if (this.id == '' || this.name == '' || this.department == '') {
      return;
    }

    this.firebaseService.addEmployee({
      id: this.id,
      name: this.name,
      department: this.department,
    }).then(() => console.log('Successfully added employee'));
  }

  updateEmployee(){
    if (this.id == '' || this.name == '' || this.department == '') {
      return;
    }

    this.firebaseService.updateEmployee(this.id, {
      id: this.id,
      name: this.name,
      department: this.department,
    });
    console.log('Successfully updated employee');
  }

  ngOnInit() {
    this.firebaseService.getCollection('employees').subscribe(employees => {
      this.employeeList = employees;
    });
  }

}
