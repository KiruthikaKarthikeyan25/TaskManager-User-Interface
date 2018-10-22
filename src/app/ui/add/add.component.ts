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
    var txtTaskName = $("#Taskname");
    var ParentTaskName =  $("#Parentname").val() ;    
    var startDD = $("#Startdate").val();
    var endDD = $("#Enddate").val()
    if(txtTaskName.val() == ''){
      this.Recordadded="Please enter Task name";
      return false;
    }    
    else if (this.item.Priority == undefined){
      this.Recordadded="Please enter Priority";
      return false;
    }
    else if (this.item.ParentTaskName == undefined){
      this.Recordadded="Please enter Parent Task";
      return false;
    }
    else if(startDD == ''){
      this.Recordadded="Please enter Start Date";
      return false;
    }
    else if(endDD == ''){
      this.Recordadded="Please enter End Date";
      return false;
    }
    

    //Invoke add service here
    this._service.Add(this.item)
    .subscribe(i=>this.msg=i);
    this.Recordadded="Record added successfully";
    return true;
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
