import { Injectable } from '@angular/core';
import {collection, collectionData, deleteDoc, doc, Firestore, setDoc, updateDoc} from '@angular/fire/firestore';
import {Employee} from '../model/employee';
import {Observable} from 'rxjs';
import {Project} from '../model/project';
import {Task} from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class FireBaseServiceService {

  constructor(private firestore: Firestore) { }

  // EMPLOYEES
  addEmployee(employee: Employee) {
    const collRef = doc(this.firestore,'employees', employee.id.toString());
    return setDoc(collRef, employee);
  }

  deleteEmployee(employeeId: string) {
    const collReference = doc(this.firestore, `employees/${employeeId}`);
    return deleteDoc(collReference);
  }

  updateEmployee(employeeId: string, newEmployee: Employee) {
    const plantRef = doc(this.firestore, 'employees', employeeId.toString());
    updateDoc(plantRef, {
      id: employeeId,
      name: newEmployee.name,
      department: newEmployee.department
    });
  }


  // PROJECTS
  addProject(project: Project) {
    const collRef = doc(this.firestore,'projects', project.id.toString());
    return setDoc(collRef, project);
  }

  deleteProject(projectId: string) {
    const collReference = doc(this.firestore, `projects/${projectId}`);
    return deleteDoc(collReference);
  }

  updateProject(projectId: string, newProject: Project) {
    const collRef = doc(this.firestore, 'projects', projectId.toString());
    updateDoc(collRef, {
      id: projectId,
      name: newProject.name,
      description: newProject.description
    });
  }
  // TASKS
  addTask(task: Task) {
    const collRef = doc(this.firestore,'tasks', task.id.toString());
    return setDoc(collRef, task);
  }

  deleteTask(taskId: string) {
    const collReference = doc(this.firestore, `tasks/${taskId}`);
    return deleteDoc(collReference);
  }

  // GENERAL
  getCollection(collectionName: string): Observable<any> {
    const collReference = collection(this.firestore, collectionName);
    return collectionData(collReference) as Observable<any>;
  }

}
