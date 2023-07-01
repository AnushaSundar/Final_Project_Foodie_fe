import { Injectable, Component } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(localStorage.getItem('isLoggedIn')=="true")
    {
      if(localStorage.getItem("vendor")=="true"){
        return true;
      }
      else{
        if(window.confirm("You need to register as a vendor")){
          this.router.navigateByUrl("/vendor")
        }
          return false

      }
    }
    else{
      if(window.confirm("You need to login")){
        this.router.navigateByUrl("/login")
      }
        return false

    }
  }

}
