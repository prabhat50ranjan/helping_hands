import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { Booking } from '../booking';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cookweekdayform',
  templateUrl: './cookweekdayform.component.html',
  styleUrls: ['./cookweekdayform.component.css']
})
export class CookweekdayformComponent {

  constructor(private router: Router,private loggingService:LoggingService) { }

  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  message:string;
  bookdetails=new Booking('','','','','' );
  url="https://helpinghands90.herokuapp.com/cookweekday";
  bookingRequest()
  {
    console.log(this.bookdetails.name);
    this.loggingService.getResponse(this.url,this.bookdetails)
    .subscribe(
      (response)=>console.log(response),
      (error)=>console.log(error)

    );
    this.message="YOUR REQUEST HAS BEEN SUBMITTED SUCESSFULLY";
    setTimeout(()=>{    
      this.router.navigate(['/home']);
  }, 3000);

  }

}
