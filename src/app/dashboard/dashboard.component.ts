import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';
import { Task } from '../task/task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  taskObj: Task = new Task();
  taskArr: Task[] = [];
  addTaskValue: string = '';
  editTaskValue: string = '';

  constructor(private service: MyserviceService){}

  ngOnInit(): void {
    this.addTaskValue = '';
    this.editTaskValue = '';
    this.taskObj = new Task();
    this.taskArr = [];
    this.getTask();
  }

  getTask(){
    this.service.getTask().subscribe(res =>{
      this.taskArr = res;
    }, err =>{
      alert("SABA AR ICI JUNGLEROBA DA SHEGVECI RA")
    })
  }

  addTask(){
    this.taskObj.task_name = this.addTaskValue;
    this.service.addTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
      this.addTaskValue = '';
    }, err =>{
      alert(err);
    })
  }

  editTask(){
    this.taskObj.task_name = this.editTaskValue;
    this.service.editTask(this.taskObj).subscribe(res =>{
      this.ngOnInit();
    }, err =>{
      alert("JG DIFF")
    })
  }

  deleteTask(atask : Task){
    this.service.deleteTask(atask).subscribe( res =>{
      this.ngOnInit();
    }, err =>{
      alert("FF 15");
    })
  }

  call(atask: Task){
    this.taskObj = atask;
    this.editTaskValue = atask.task_name;
  }
}
