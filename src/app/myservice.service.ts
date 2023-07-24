import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Ragistration } from './ragistration';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Ragistration[]>{
    return this.http.get<Ragistration[]>('http://localhost:3000/details');
  }
  creat(data:Ragistration){
    return this.http.post('http://localhost:3000/details',data);
  }
}
