import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { window } from 'rxjs/internal/operators/window';
import { Window } from 'selenium-webdriver';
import * as $ from 'jquery';
//import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit { 
    
// item:Task
//   constructor(private router : Router) {    
//     this.item = new Task();
//    }
list:Task[] = [];
list1:Task[] = [];
item:Task;
name:string;
PTname:string;
PriFrom:number;
PriTo:number;
Sdate:Date;
Edate:Date;
btnStyle:string = 'btn-def';
  constructor (private _service:SharedService, private _route:Router){ 
    this.item=new Task();  
    this._service.GetAll()
    .subscribe(i=>this.list=i); 
     this._service.GetAll()
     .subscribe(i=>this.list1=i); 
         
  }
  ngOnInit() {     
    
  }   
    
    Edit(id:number)
    {      
      this._route.navigateByUrl('/update/'+id);
    }  

  EndTask(id:number)
  {
    
    this._service.EndTask(id).subscribe(
      success =>
      {
        this._service.GetAll().subscribe(i=> this.list1 = i);
      }
    );
    this._route.navigateByUrl('view');    
     //this.btnStyle = 'btn-chg';
  }   
    Delete(id:number)
    { 
      //this._service.Delete(id).subscribe(i=>this.item=i);
      this._service.Delete(id).subscribe(
        success => 
        {
          this.list1 = this.list1.filter((e) =>{
            return e.TaskId !== id;
          });
        }
      );     
      //this.btnStyle='btn-def';
    }
    SearchByTask(tsk:string)
    {
      //this.list1 = this.list; 
      console.log("TaskName: " +tsk);
      this.name = tsk;
      console.log(this.list1);
      this.list1 = this.list.filter(i =>i.TaskName.toUpperCase().startsWith(this.name.toUpperCase()));
      console.log(this.list1);
    }
    SearchByParentTask(PTask:string)
    {
      this.list1 = this.list.filter(i =>i.ParentTaskName.toUpperCase().startsWith(PTask.toUpperCase()));
    }
   
    SearchByPriorityFrom(pri:number)
    {
      this.PriFrom = pri;
      //this.list1 = this.list.filter(i => i.Priority.toString().includes(this.PriFrom.toString()));
      //this.list1 = this.list.filter(i =>i.Priority.toString() === pri.toString()) ;
      // if(this.PriFrom.toString() === 'undefined' && this.PriTo.toString() === 'undefined')
      //     this.list1 = this.list;
      if(this.PriFrom == undefined)
      return;
     if(this.PriFrom != undefined && this.PriFrom.toString()!= ""&& this.PriTo != undefined && this.PriTo.toString()!= "")           
        this.list1 = this.list.filter((i) => (i.Priority.toString() >= this.PriFrom.toString() && i.Priority.toString() <= this.PriTo.toString() )) ;     
    else if(this.PriFrom.toString() != "" )
        this.list1 = this.list.filter(i =>i.Priority.toString().startsWith(this.PriFrom.toString())) ;
      else if(this.PriTo.toString() != "")
        this.list1 = this.list.filter(i =>i.Priority.toString().startsWith(this.PriTo.toString())) ;
      else{
        this.list1 = this.list;
      }
      console.log("Priority: "+this.list1);
    }   
    SearchByPriorityTo(pri:number)
    {
      this.PriTo = pri;
      // if(this.PriFrom.toString() === 'undefined' && this.PriTo.toString() === 'undefined')
      // this.list1 = this.list;
      if(this.PriTo == undefined)
      return;
      if(this.PriFrom != undefined && this.PriFrom.toString()!= ""&& this.PriTo != undefined && this.PriTo.toString()!= "")      
         this.list1 = this.list.filter((i) => (i.Priority.toString() >= this.PriFrom.toString() && i.Priority.toString() <= this.PriTo.toString() )) ;           
      else if(this.PriTo.toString() != "")
        this.list1 = this.list.filter(i =>i.Priority.toString().startsWith(this.PriTo.toString())) ;
      else if(this.PriFrom.toString() != "")
        this.list1 = this.list.filter(i =>i.Priority.toString().startsWith(this.PriFrom.toString())) ;        
        else{
          this.list1 = this.list;
        }
      

    }
    SearchBySDate(ssdate:Date)
    {
      this.Sdate = ssdate;
      // var from_date = ssdate!== undefined? new Date(ssdate):"0001/01/01";
      // var to_date = this.Edate !== undefined ? new Date(this.Edate) : "9999/30/12";
     //this.list1 = this.list.filter(i =>i.StartDate.toString().includes(this.Sdate.toString()));
      if(ssdate !== undefined && ssdate !== null)
      this.list1 = this.list.filter(i =>i.SDate.toString().toUpperCase().startsWith(ssdate.toString().toUpperCase())) ;
      // if(ssdate !== undefined && this.Edate !== undefined  ){
      //   this.list.filter(i =>i.SDate >=
      // }
    }
    SearchByEDate(eedate:Date)
    {
      this.Edate = eedate;
      //this.list1 = this.list.filter(i =>i.EndDate.toString().includes(this.Edate.toString()));
      if(eedate !== undefined && eedate !== null)
      this.list1 = this.list.filter(i =>i.EDate.toString().toUpperCase().startsWith(eedate.toString().toUpperCase())) ;

    }
    
}


