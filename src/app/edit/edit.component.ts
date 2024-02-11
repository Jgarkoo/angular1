import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';
import { Task } from '../task/task';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private service: MyserviceService){}

  ngOnInit(): void {
    this.editTaskValue = '';
    this.taskObj = new Task();
  }
  taskObj: Task = new Task();
  editTaskValue: string = '';

  editTask(){
    this.taskObj.task_name = this.editTaskValue;
    this.service.editTask(this.taskObj).subscribe(res =>{
      this.ngOnInit();
    }, err =>{
      alert("JG DIFF")
    })
  }
}
