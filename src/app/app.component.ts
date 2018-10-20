import { Component } from '@angular/core';
import * as $ from 'jquery';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(){
    $(document).ready(function(){
      $('a').click(function(){
        // $('a').removeClass('LiActive');
        // $(this).removeClass('LiLoad');
        // $(this).addClass('LiActive');
      });
    });
  }
  title = 'Task Manager';
}
