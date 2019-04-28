import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoggingService{
    constructor(private http:HttpClient){}
    getResponse(){
     return this.http.get('http://localhost:8000/');
    } 

}