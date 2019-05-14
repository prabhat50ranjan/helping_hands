import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { Note } from '../note';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private loggingService:LoggingService) { }
 
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  messagee:string;
  notedetails=new Note('','','','');
  url="https://helpinghands90.herokuapp.com/notesend";
  noteSending()
  {
    console.log(this.notedetails.name);
    this.loggingService.sendNote(this.url,this.notedetails)
    .subscribe(
      (response)=>console.log(response),
      (error)=>console.log(error)

    );
    this.messagee="YOUR REQUEST HAS BEEN SUBMITTED SUCESSFULLY";
    
    setTimeout(()=>{    
      this.messagee='';
  }, 3000);
    
    }

}
