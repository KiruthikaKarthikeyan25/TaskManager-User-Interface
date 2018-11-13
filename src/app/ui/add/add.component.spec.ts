import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AddComponent } from './add.component';
import { Task } from 'src/app/models/task';
import { Observable, of } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { DebugElement } from '@angular/core';
import { By } from 'protractor';


describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;
  
  // const dummyTask = [

  //   { TaskName:"Edit Tasks",TaskId:1,Priority:2,ParentTaskName:"Edit",
  //     SDate:new Date(),EDate:new Date(),IsTaskEnded:false,PriorityTo:3},
  //     { TaskName:"Add Tasks",TaskId:2,Priority:1,ParentTaskName:"Edit",
  //     SDate:new Date(),EDate:new Date(),IsTaskEnded:false,PriorityTo:5}

  // ];

  // let dummyService = {
  //   addComments:()=>{
  //     return of(this.dummyTask);
  //   }

  // };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,HttpModule
      ],
      providers:[FormsModule,HttpModule],
      // {provide: SharedService, useValue:dummyService}],
      declarations: [ AddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Add method testing', () => {
    let tsk = Task;
    component.Add();
    expect(component).toBeTruthy();
  });
  it('Task Name should be test', () => {
    const hostElement: HTMLElement = fixture.nativeElement;
    const nameInput:HTMLInputElement = hostElement.querySelector('input');    
    nameInput.textContent = 'Test';   
    nameInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();    
    expect(nameInput.textContent).toBe('Test');
   });
  it('Task Name should be empty', () => {
    const hostElement: HTMLElement = fixture.nativeElement;
    const nameInput:HTMLInputElement = hostElement.querySelector('input');    
    nameInput.textContent = '';   
    nameInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();    
    expect(nameInput.textContent).toBe('');      
    
  });
  // it('Reset method testing', () => {
  //   let tsk = Task;
  //   component.Reset();
  //   expect(component).toBeTruthy();
  //   component.item = {};
  //   let createPasteButton = fixture.debugElement.query('btnAdd');
  //   expect(component.Reset()).toBe(null);
  // });

});
