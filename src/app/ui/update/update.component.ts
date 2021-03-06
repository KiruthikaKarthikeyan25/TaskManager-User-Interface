import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { ActivatedRoute } from '@angular/router/';
//import { SharedService } from "../../services/shared.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
TaskId:number;
item:Task
TaskData: Task[];
list:Task[];
msg:any;
Recordadded:string;
  constructor(private router : Router, private _service:SharedService,private _active:ActivatedRoute) {
    this.item = new Task();     
    this._active.params.subscribe(k=>this.TaskId=k['TaskId']);
    this._service.Search(this.TaskId).subscribe(i=>this.item=i);           
    this._service.GetAll().subscribe(i=>this.list=i);
   }

  ngOnInit() {
  }  
  Update(){
    
    this._service.Edit(this.item)
    .subscribe(i=>this.msg=i);
    this.Recordadded="Record updated successfully";  
    
}
       
  
  Cancel(){
    this.Recordadded="";
    this.router.navigateByUrl('add');
  }
}