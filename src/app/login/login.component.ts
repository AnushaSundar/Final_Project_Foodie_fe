import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { CartService } from '../services/cart.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private fb: FormBuilder,
  // private snackBar: MatSnackBar
    private login:LoginService,
    private route:Router,
    private userService:UserService,
    private cart:CartService,
    private http:HttpClient
  ) {}


  loginForm:any = new FormGroup({
    email:new FormControl(''),
    password: new FormControl('')
  })

  user:User|any
  token :string|any
  onSubmit() {
    console.log("clicked")
    let user : User = {}
    user.email =  this.loginForm.value.email
    user.password = this.loginForm.value.password
    // console.log(user)
    this.login.login(user).subscribe({
      next:(data:any)=>{
        console.log(data)
        if(data != ''){
            this.token = data.token
            this.login.isloggedIn = true
            localStorage.setItem("isLoggedIn","true")

            // console.log(this.token)
            // console.log(this.isloggedIn)
            localStorage.setItem("token",this.token)
            const headers = new HttpHeaders (
              {
                "authorization" : "Bearer "+ localStorage.getItem("token")
              }
            );
            this.http.get("http://localhost:9000/api/v1/user/"+user.email,{headers:headers}).subscribe({
              next:(data:any)=>{
               if(localStorage.getItem("isLoggedIn"))
                if(data != ''){
                    this.user = data
                   localStorage.setItem("vendor",String(this.user.vendor))
                   localStorage.setItem("email",String(this.user.email))
                   localStorage.setItem("name",String(this.user.name))
                   localStorage.setItem("image",String(this.user.image))


                   if(localStorage.getItem("currCity") == "" || localStorage.getItem("currCity") == null){
                    this.route.navigateByUrl('/dashboard')}
                    else{
                      this.route.navigateByUrl("/"+ localStorage.getItem("currCity")+"/restaurantDashboard")
                    }
                    let length = 0
                    this.userService.getCartItems().subscribe(
                      res=>{
                        length = Number(res)
                        this.cart.cartLength = Number(length)
                        console.log(length)})
                   }
         }
    })
  }},error:(err:any)=>{alert("Wrong Credentials")
  this.loginForm.reset()
}
})


  }
  get email(){
    return this.loginForm.get('email')
    }
    get password(){
      return this.loginForm.get('password')
      }
    getErrorMessage(){
      return "This Field Cannot Be Empty"
    }
}
