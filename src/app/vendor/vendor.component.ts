import { Login } from './../models/login';
import { User } from './../models/user';
import { UserService } from './../services/user.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent {
  constructor(private userService:UserService,private login:LoginService,private router:Router,private _snackBar: MatSnackBar){}
  user:User = {}
  vendorForm:any = new FormGroup({
    vendor:new FormControl(''),
    password: new FormControl('',[Validators.required])
  })

  getErrorMessage(){}
  get vendor(){return this.vendorForm.get("vendor")}
  get password(){return this.vendorForm.get("password")}

  onSubmit(){
    this.user.email = String(localStorage.getItem('email'))
    this.user.password = this.vendorForm.value.password
    console.log(this.user)
    this.userService.vendor(this.user).subscribe({
      next:(data:any)=>{
        console.log(data)
        if(data != "true")
        {
          localStorage.setItem("vendor","true")
          this.router.navigateByUrl("/vendorRestaurantDashboard")
          console.log(data)
          this._snackBar.open("You have sucessfully registered as vendor", "OK");
        }
      },
      error:(data:any)=>{
        this._snackBar.open("Please check your password", "OK");
       console.log(data);
       this.vendorForm.reset({
        password: ''
      });
      }
  })
  }

  vendor1():boolean{
    if(localStorage.getItem('vendor') == "true"){
      console.log('true working')
      return true
    }
    return false
  }
}
