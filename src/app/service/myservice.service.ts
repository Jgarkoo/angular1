import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Task } from '../task/task'; 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  servURL :  string;

  constructor(private http: HttpClient) { 
    this.servURL = "http://localhost:3000/task";
  }

  addTask(task: Task) : Observable<Task>{
    return this.http.post<Task>(this.servURL, task)
  } 

  getTask() : Observable<Task[]>{
    return this.http.get<Task[]>(this.servURL)
  }

  deleteTask(task: Task) : Observable<Task>{
    return this.http.delete<Task>(this.servURL + '/' + task.id)
  }

  editTask(task: Task) : Observable<Task>{
    return this.http.put<Task>(this.servURL + '/' + task.id, task)
  }

}
