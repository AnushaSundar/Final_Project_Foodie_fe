import { Address } from './../models/address';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-address-form',
  templateUrl: './edit-address-form.component.html',
  styleUrls: ['./edit-address-form.component.css']
})
export class EditAddressFormComponent {
  constructor(private userService:UserService,private fb:FormBuilder,private router:Router,private activate:ActivatedRoute,private _snackbar:MatSnackBar){}
  // form:FormGroup|any = this.fb.group
  // addressForm:FormGroup|any
  address:Address|any
  ngOnInit(){
    let addressId:any
this.activate.paramMap.subscribe(
  res => {
    addressId = res.get("id")?? 0
    this.userService.getAddressById(addressId).subscribe(res=>{
      // console.log(JSON.stringify(res)+"----");
      this.address=res
      console.log(res.name)
      // this.addressForm = this.fb.group({
      //   name: new FormControl("" ,),
      //   number: new FormControl(this.address.number, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),
      //   street: new FormControl(this.address.street, Validators.required),
      //   city: new FormControl(this.address.city, Validators.required),
      //   locality: new FormControl(this.address.locality, Validators.required),
      // })
      this.addressForm.get("name")?.setValue(res.name)
      this.addressForm.get("number")?.setValue(res.number)
      this.addressForm.get("street")?.setValue(res.street )
      this.addressForm.get("city")?.setValue(res.city )
      this.addressForm.get("locality")?.setValue(res.locality)
      // this.addressForm.name.setValue("a")
    })
  }
);



}




addressForm :FormGroup= this.fb.group({
  name: new FormControl("" ,),
  number: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),
  street: new FormControl("", Validators.required),
  city: new FormControl("", Validators.required),
  locality: new FormControl("", Validators.required),
})




  onSubmit(){
  this.address.name = this.addressForm.value.name
  this.address.number = this.addressForm.value.number
  this.address.street = this.addressForm.value.street
  this.address.city = this.addressForm.value.city
  this.address.locality = this.addressForm.value.locality
  console.log(this.address)
  this.userService.updateAddress(this.address).subscribe(res=>{
  console.log("updated success");

  this._snackbar.open("your Address is updated", "Ok",{duration:2000});
    this.router.navigateByUrl("/addressdash")
},err=>{console.log("notUpdated");
})
  }

}
