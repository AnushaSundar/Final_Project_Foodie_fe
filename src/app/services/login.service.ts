import { UserService } from './user.service';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './../models/restaurant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { User } from '../models/user';
import { CartService } from './cart.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isloggedIn:Boolean = false;
  token:any = ''
  user:User = {}
  get LoggedIn(){
    this.isloggedIn= Boolean(localStorage.getItem("isLoggedIn"))
    return this.isloggedIn
  }
   constructor(private http:HttpClient,private route:Router) { }
  ngOnInit(){
    const email:any = localStorage.getItem('email')
    this.user.email = String(email)
    const logged:any = localStorage.getItem("isLoggenIn")
    this.isloggedIn = Boolean(logged)
    const name:any = localStorage.getItem("name")
    this.user.name = String(name)
    const image:any = localStorage.getItem("image")
    this.user.image = Number(image)
  }
   login(log:Login):Observable<any>{
    return this.http.post("http://localhost:9000/api/v2/login",log)}


 logout(){
    window.localStorage.clear();
    localStorage.setItem("isLoggedIn","false")
 }
}
