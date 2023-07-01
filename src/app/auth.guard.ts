import { Login } from './models/login';
import { LoginService } from './services/login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private login:LoginService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(localStorage.getItem("isLoggedIn"))
   if(localStorage.getItem("isLoggedIn")=="true"){
    return true
   }
       if( window.confirm("You need to enter your email and password to login."))
       {
        this.router.navigateByUrl("/login")
       }
        return false
    }
}
