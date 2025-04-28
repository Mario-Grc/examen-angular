import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {FireBaseServiceService} from '../../service/fire-base-service.service';
import {Project} from '../../model/project';
import {ProjectCardComponent} from '../project-card/project-card.component';

@Component({
  selector: 'app-project-form',
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule,
    RouterLink,
    ProjectCardComponent
  ],
  templateUrl: './project-form.component.html',
  styleUrl: '../employee-form/employee-form.component.css'
})
export class ProjectFormComponent implements OnInit {
  id: string = '';
  name: string = '';
  description: string = '';

  projectList: Project[] = [];
  constructor(private firebaseService: FireBaseServiceService) {}


  onSubmit(){
    if (this.id == '' || this.name == '' || this.description == '') {
      return;
    }

    this.firebaseService.addProject({
      id: this.id,
      name: this.name,
      description: this.description,
    }).then(() => console.log('Successfully added project'));
  }

  updateProject(){
    if (this.id == '' || this.name == '' || this.description == '') {
      return;
    }

    this.firebaseService.updateProject(this.id, {
      id: this.id,
      name: this.name,
      description: this.description,
    });
    console.log('Successfully updated project');
  }

  ngOnInit() {
    this.firebaseService.getCollection('projects').subscribe(employees => {
      this.projectList = employees;
    });
  }
}
