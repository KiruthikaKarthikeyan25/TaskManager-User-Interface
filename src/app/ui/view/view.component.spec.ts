import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { ViewComponent } from './view.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,HttpModule,RouterTestingModule
      ],
      providers:[FormsModule,HttpModule,
      ],
      declarations: [ ViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
