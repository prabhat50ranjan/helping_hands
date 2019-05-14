import { Component } from '@angular/core';
import { LoggingService } from './logging.service';
import { Booking } from './booking';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  constructor(private loggingService:LoggingService){}
  title = 'helping-hands';
  bookdetails=new Booking('','','','','' );
  onGet()
  {
    console.log("get operation");

  
  }
}
