import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { Booking } from '../booking';
import { Router } from '@angular/router';

@Component({
  selector: 'app-babysittermonthlypartform',
  templateUrl: './babysittermonthlypartform.component.html',
  styleUrls: ['./babysittermonthlypartform.component.css']
})
export class BabysittermonthlypartformComponent  {

  constructor(private router: Router,private loggingService:LoggingService) { }
   
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  message:string;
  bookdetails=new Booking('','','','','');
  url="https://helpinghands90.herokuapp.com/babysittermonthlypart";
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
