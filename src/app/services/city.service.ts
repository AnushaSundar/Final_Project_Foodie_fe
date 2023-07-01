import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  cities:String[]=[];
  constructor(private http:HttpClient) { }

  getCity():Observable<any>{
   return this.http.get( "http://localhost:9000/city/get")
  }

}
