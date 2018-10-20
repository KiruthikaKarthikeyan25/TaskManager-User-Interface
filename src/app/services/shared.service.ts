import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs';
//import 'rxjs/add/operator/map';
import { Task } from 'src/app/models/task';
import {map} from 'rxjs/operators';
import { observable } from 'rxjs/internal/symbol/observable';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
//add url and posturl

// urlgetall:string ='http://localhost:62471/GetAllTask';
// urlAddtask:string='http://localhost:62471/AddTask';
// urlupdatetask:string='http://localhost:62471/UpdateTaskById';
// urlendtask:string='http://localhost:62471/EndTaskById';
// urldeletetask:string='http://localhost:62471/DeleteTaskById';
// urlgetbytaskId:string='http://localhost:62471/GetTaskById';
urlgetall:string ='http://localhost/TaskManager.API/getalltask';
urlAddtask:string='http://localhost/TaskManager.API/AddTask';
urlupdatetask:string='http://localhost/TaskManager.API/UpdateTaskById';
urlendtask:string='http://localhost/TaskManager.API/EndTaskById';
urldeletetask:string='http://localhost/TaskManager.API/DeleteTaskById';
urlgetbytaskId:string='http://localhost/TaskManager.API/GetTaskById';

  constructor(private _http :Http) { }    
GetAll():Observable<Task[]> {
return this._http.get(this.urlgetall).pipe(
map((response:Response) => <Task[]>response.json()));
  }
Add(item:Task):Observable<any>{
    return this._http.post(this.urlAddtask,item).pipe(
      map((response:Response) => <any>response.json()));
  }
Delete(Id:Number):Observable<any>
{
  return this._http.delete(this.urldeletetask+"/"+Id).pipe(
  map((response: Response)=><any>response.json()));
}
Edit(item:Task):Observable<Task[]>
{
  return this._http.put(this.urlupdatetask+"/"+item.TaskId,item).pipe(
  map((response: Response)=><Task[]>response.json()));
}
Search(Id:number):Observable<Task>
{
  return this._http.get(this.urlgetbytaskId+"/"+Id).pipe(
  map((response: Response)=><Task>response.json()));
}
EndTask(Id:Number):Observable<Task>
{
  return this._http.post(this.urlendtask+"/"+Id,Id).pipe(
  map((response:Response)=><Task>response.json()));
}
}
