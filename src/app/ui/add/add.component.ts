import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { Http } from '@angular/http';
import { SharedService } from 'src/app/services/shared.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
item:Task
list:Task[];
pid:number;
msg:any;
Recordadded:string;
  constructor(private _service:SharedService) {
    this.item = new Task();
    this._service.GetAll()
    .subscribe(i=>this.list=i);  
   }  
    
  ngOnInit() {
  }

  Add(){
    //Invoke add service here
    this._service.Add(this.item)
    .subscribe(i=>this.msg=i);
    this.Recordadded="Record added successfully";
  }
  Reset(){
    $('#Taskname').val('');
    $('#Priority').val('');
    $('#Parentname').val('');   
    $('#Startdate').val('');
    $('#Enddate').val('');
    this.Recordadded="";
  }
}
