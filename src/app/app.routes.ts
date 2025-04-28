import { Routes } from '@angular/router';
import {EmployeeFormComponent} from './components/employee-form/employee-form.component';
import {ProjectFormComponent} from './components/project-form/project-form.component';

export const routes: Routes = [
  {path: '', component: EmployeeFormComponent},
  {path: 'project', component: ProjectFormComponent},
];
