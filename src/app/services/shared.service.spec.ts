import { TestBed,async,inject } from '@angular/core/testing';
import {HttpModule,Http,Response,ResponseOptions,XHRBackend} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Task } from 'src/app/models/task';
import { SharedService } from './shared.service';


let service: SharedService;
describe('SharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpModule  
    ],
    providers:[HttpModule, SharedService,
      // { provide: SharedService, useValue: 'http://localhost/TaskManager.API/' },
      { provide: XHRBackend, useClass: MockBackend }
      ],
    
  }));
  // describe('GetAll()', () => {
  //   it('should return an Observable<Array<Task>>',
  //       inject([SharedService, XHRBackend], (ssService, mockBackend) => {

  //       const mockResponse = {
  //         data: [
  //           {TaskId:1,TaskName:'One',ParentTaskName:'Parent One',Priority:10,PriorityTo:11,SDate:new Date(2014,2,2),EDate:new Date(2014,3,4),IsTaskEnded:true}            ,
  //           {TaskId:2,TaskName:'Two',ParentTaskName:'Parent two',Priority:3,PriorityTo:5,SDate:new Date(2014,2,2),EDate:new Date(2014,3,4),IsTaskEnded:true}
  //         ]
  //       };
  //       mockBackend.connections.subscribe((connection) => {
  //         connection.mockRespond(new Response(new ResponseOptions({
  //           body: JSON.stringify(mockResponse)
  //         })));
  //       });
  //       ssService.GetAll().subscribe((tasks) => {
  //         expect(tasks.length).toBe(2);
  //         expect(tasks[0].TaskName).toEqual('One');
  //         expect(tasks[1].TaskName).toEqual('Two');          
  //       });

  //   }));
  // });

  it('Service should be created', () => {
    const service: SharedService = TestBed.get(SharedService);
    expect(service).toBeTruthy();
  });
  it('Adding record',()=>{
    const item:Task={TaskId:123,TaskName:'Testservice',ParentTaskName:'Parenttask',Priority:10,PriorityTo:11,SDate:new Date(2014,2,2),EDate:new Date(2014,3,4),IsTaskEnded:true}
    const service: SharedService = TestBed.get(SharedService);    
    service.Add(item).subscribe(
      r => {
        expect(r.TaskName).toEqual('Testservice');
      }
    );
    //expect(service).toBeTruthy();
  });
  it('Deleting record',()=>{   
    const TaskId  = 8;
    const service: SharedService = TestBed.get(SharedService);    
    service.Delete(TaskId);
    expect(service).toBeTruthy();
  });
  it('Get all Task',()=>{    
    const service: SharedService = TestBed.get(SharedService);    
    service.GetAll().subscribe(
      r => {
        expect(r.length).toEqual(3);
      }
    );    
  });
  it('Edit Task',()=>{
    const item:Task={TaskId:123,TaskName:'Test Edited service',ParentTaskName:'Parenttask',Priority:10,PriorityTo:11,SDate:new Date(2014,2,2),EDate:new Date(2014,3,4),IsTaskEnded:true}
    const service: SharedService = TestBed.get(SharedService);    
    service.Edit(item).subscribe(
      r => {
        expect(r.length).toEqual(3);
      }
    );    
  });

});
