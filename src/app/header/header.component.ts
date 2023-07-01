import { UserService } from './../services/user.service';
// import { User } from './../models/userData';
import { RestaurantService } from './../services/restaurant.service';
import { Router, RouterModule } from '@angular/router';
import { Login } from './../models/login';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private login:LoginService,private route:Router,private uS:UserService,private cart:CartService){}
  get cartLength():any { return this.cart.cartLength}
  ngOnInit(): void {
    // this.cart.cartLength =
      this.uS.getCartItems().subscribe(
        res=>{
          // this.cartLength = res
          console.log(res)
          this.cart.cartLength = Number(res)
        }
      )

  }

  get loggedIn() {
  if(localStorage.getItem("isLoggedIn") == "true"){return true}
  else return false
}
  get user() {
    let user:User ={}
    const email:any = localStorage.getItem('email')
    user.email = String(email)
    const name:any = localStorage.getItem("name")
    user.name = String(name)
    const image:any = localStorage.getItem("image")
    user.image = Number(image)
    return user
  }



  goToLogin(){
    console.log("clicked")
    this.route.navigateByUrl("/login")
  }
  search(name:any){
  }


  logOut(){
    this.login.logout()
  }

}
