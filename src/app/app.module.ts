import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { AddComponent } from './ui/add/add.component';
import { UpdateComponent } from './ui/update/update.component';
import { ViewComponent } from './ui/view/view.component';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpModule } from '@angular/http';
import { HttpClientModule }from '@angular/common/http';

const appRoutes: Routes=[
  {path:'add',component:AddComponent},
  {path:'view',component:ViewComponent},
  {path:'update/:TaskId',component:UpdateComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    UpdateComponent,
    ViewComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule,HttpModule,HttpClientModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
