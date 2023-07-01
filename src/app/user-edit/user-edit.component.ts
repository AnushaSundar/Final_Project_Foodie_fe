import { UserService } from './../services/user.service';
import { User } from './../models/user';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  registerForm: FormGroup|any;
user:User = {}
  constructor(private fb:FormBuilder,private userService:UserService,private route:Router,private _snackbar:MatSnackBar){}
  ngOnInit() {
    let user:User ={}
    const email:any = localStorage.getItem('email')
    user.email = String(email)
    const name:any = localStorage.getItem("name")
    user.name = String(name)
    const image:any = localStorage.getItem("image")
    user.image = Number(image)
    this.user = user

    let user1:User
    this.userService.getUser().subscribe(
      (res:User)=>{
        user1 = res
        console.log(user1.dob)
        const dateString = String(user1.dob)
        const dateParts = dateString.split('-');
        // console.log(dateParts)
        const year = String(dateParts[0]);
        // const month1 = dateParts[2].split("T")
        // console.log(month1)
        const month = String(dateParts[1]);
        console.log(month + "month")
        // console.log(dateParts)
        const day = String(dateParts[2]);
        // console.log( day + "day")
        // console.log(day)
        const isoDateString = month +"-"+ day+"-" +year
        console.log(isoDateString)
        const dob = new Date(isoDateString);
        console.log(dob)
        user1.dob = String(dob)
        console.log(user1.dob)
        this.registerForm  = this.fb.group({
          email: [user1.email, [Validators.required, Validators.email]],
          phoneNo: [user1.phoneNo, [Validators.required, Validators.pattern('^[0-9]{10}$')]],
          name: [user1.name, [Validators.required]],
          dob: [new Date(user1.dob), [Validators.required]],
          image:[''],
        })
      }
    )
  }

  disable:boolean = true
  submitForm(){
    this.registerForm.value.dob = new Date(this.registerForm.value.dob.getTime() - this.registerForm.value.dob.getTimezoneOffset() * 60000);
    // const isoDateString = new Date().toISOString().substring(0, 10);
    this.registerForm.value.dob = this.registerForm.value.dob.toISOString().substring(0, 10);
    console.log(this.registerForm.value.dob)
    this.userService.updateUser(this.registerForm.value).subscribe(res=>{console.log("userUpdated");

    if(localStorage.getItem("currCity")!=""){
    this.route.navigateByUrl("/"+localStorage.getItem("currCity")+"/restaurantDashboard")}
    else{
      this.route.navigateByUrl("/dashboard")
    }
    this._snackbar.open("Successfully updated", "Ok",{duration:2000});
    })
  }

  onSubmit() {

    console.log(this.registerForm.value)
  }
  onFileSelected(event:any){
  }



  updateImage(event:any){
    this.userService.updateImage( this.user.image,event.target.files[0]).subscribe(res=>{console.log("succesImage");
    let img:any = document.getElementById("profile-img")
    // img.setAttribute("src",event.target.files[0])
    // img.src = event.target.files[0]
    // console.log(event.target.files[0])
    // img.src = "http://localhost:9000/image/getimage/"+this.user.image
    // console.log(img.src)
    img.src = window.URL.createObjectURL(event.target.files[0])
    console.log(img.src)
    this._snackbar.open("your Image is updated", "Ok",{duration:2000});

    })
  }
}
