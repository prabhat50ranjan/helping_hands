import { Component } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  constructor(private loggingService:LoggingService){}
  title = 'helping-hands';

  onGet()
  {
    this.loggingService.getResponse()
    .subscribe(
      (response)=>console.log(response),
      (error)=>console.log(error)

    );
  }
}
