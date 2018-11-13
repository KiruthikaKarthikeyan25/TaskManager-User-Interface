import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { UpdateComponent } from './update.component';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,HttpModule,RouterTestingModule
      ],
      providers:[FormsModule,HttpModule,RouterTestingModule],
      declarations: [ UpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Update method testing', () => {
    component.Update();
    expect(component).toBeTruthy();
  });
  // it('updated TaskName should be NewTest', () => {
  //   const hostElement: HTMLElement = fixture.nativeElement;
  //   const nameInput:HTMLInputElement = hostElement.querySelector('input');    
  //   nameInput.textContent = 'NewTest';   
    
  //   fixture.detectChanges();    
  //   expect(nameInput.textContent).toContain(nameInput.textContent);
  // });
  
  // it('update text title should be empty ', () => {
  //   const testElement: HTMLElement = fixture.nativeElement.querySelector('h4');    
  //   expect(testElement.textContent).toBe('');
  // });
  // it('update text title should be Records Added', () => {
  //   const testElement1 : HTMLElement = fixture.nativeElement.querySelector('h4');    
  //   testElement1.textContent = 'Records Addeded';
  //   //fixture.detectChanges();
  //   expect(testElement1.textContent).toBe('Records Addeded');
  //  });
});
