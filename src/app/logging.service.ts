import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { Booking } from './booking';
import { Note } from './note';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
@Injectable()
export class LoggingService{
    constructor(private http:HttpClient){}


    getResponse(url:string,bookdetails:Booking):Observable<Booking>{
     return this.http.post<Booking>(url,bookdetails,httpOptions);
    } 

    sendNote(url:string,note:Note):Observable<Note>{
      return this.http.post<Note>(url,note,httpOptions);
     } 

}