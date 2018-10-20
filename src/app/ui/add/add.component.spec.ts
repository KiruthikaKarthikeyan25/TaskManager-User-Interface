import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AddComponent } from './add.component';
import { Task } from 'src/app/models/task';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,HttpModule
      ],
      providers:[FormsModule,HttpModule],
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
  // it('Reset method testing', () => {
  //   let tsk = Task;
  //   component.Reset();
  //   //let createPasteButton = fixture.debugElement.query('btnAdd');
  //   expect(component).toBeTruthy();
  // });

});
