import { UserService } from './../services/user.service';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registerForm: FormGroup | any;
  constructor(private fb: FormBuilder,private route:Router,private userService:UserService) { }
  expression:boolean = false

  exp() {
    this.expression = !this.expression
    console.log(this.expression)
  }
  image1:any;
  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$')]],
      confirmPassword: ['', [Validators.required]],
      phoneNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      name: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      image:[null,[Validators.required]],
    }, { validator: this.passwordShouldMatchValidation});
  }
// passwordMatchValidator: ValidatorFn = (control: AbstractControl): {[key: string]: any} | null => {
//     const password = control.get('password');
//     const confirmPassword = control.get('confirmPassword');
//     return password && confirmPassword && password.value !== confirmPassword.value ? { passwordMismatch: true } : null;
//   }
get confirmPassword(){
  return this.registerForm.get("confirmPassword")
}

  passwordShouldMatchValidation(myControl:AbstractControl){
    const passwordValue=myControl.get('password')?.value;
    const confirmPasswordValue=myControl.get('confirmPassword')?.value;
    if(!passwordValue || !confirmPasswordValue){
      return null;
   }
  if(passwordValue != confirmPasswordValue){
    return {passwordShouldMatch : false};
 }
 return null;
}
// passwordMatchValidator: ValidatorFn = (control: FormGroup): {[key: string]: any} | null => {
//   const password = control.get('password');
//   const confirmPassword = control.get('confirmPassword');

//   if (password.value !== confirmPassword.value) {
//     return { passwordMismatch: true };
//   }

//   return null;
// }


// passwordMatchValidator: ValidatorFn |any= (control: FormGroup): {[key: string]: any} | null => {
//   const password = control.get('password');
//   const confirmPassword = control.get('confirmPassword');

//   if (password?.value !== confirmPassword?.value) {
//     return { passwordMismatch: true };
//   }

//   return null;
// }

  onSubmit() {


  let user:User = {}
  console.log( this.registerForm.value.image)
  console.log( this.image1)
    user.email = this.registerForm.value.email
    user.password = this.registerForm.value.password
    user.name = this.registerForm.value.name
    this.registerForm.value.dob = new Date(this.registerForm.value.dob.getTime() - this.registerForm.value.dob.getTimezoneOffset() * 60000);
    this.registerForm.value.dob = this.registerForm.value.dob.toISOString().substring(0, 10);
    user.dob = this.registerForm.value.dob
    user.phoneNo = this.registerForm.value.phoneNo
    this.userService.register(this.convert(user))



  }
  ch(event:any){
    this.image1 = event.target.files[0];
  }

  convert(user:User):FormData{
    const formdata = new FormData();
    formdata.append('user',
    new Blob([JSON.stringify(user)],{type:'application/json'})
    );
    formdata.append('image', this.image1

        // ,this.image1.name
        );

  return formdata;
  }


}











//     console.log(this.retrievedImage,"is working")
//     const formData = new FormData();
//     console.log(this.retrievedImage.name)
//     formData.append('image', this.retrievedImage,
//     this.retrievedImage.name);
//     this.httpClient.post('http://localhost:9000/image/upload',formData).subscribe(
//       (response) => {console.log(response)
//         this.httpClient.get("http://localhost:9000/image/getimage/WhatsApp Image 2023-02-05 at 23.52.18.jpeg")
//       },

//       (error) => console.log(error)
//     );
//   }
// }






  //  console.log(this.registerForm.value.image)

  //   this.userService.register(user)
  //   this.route.navigateByUrl('/login')
