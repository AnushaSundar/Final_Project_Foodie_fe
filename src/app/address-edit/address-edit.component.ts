import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Address } from '../models/address';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent implements OnInit {
  constructor(private userService:UserService,private router:Router,private sb:MatSnackBar){}
ngOnInit(): void {
  this.userService.getAddress().subscribe(res=>{
    this.locations=res
  })
}

locations:Address[]=[]



edit(location:any){
  this.router.navigateByUrl("editAddressForm/"+location.id)
}
delete1(id:any){
  console.log("working" +id)
  this.userService.deleteAddress(id).subscribe(res=>{console.log("deleted");
  this.ngOnInit()
  },err=>{console.log("NotDeleted");
  })
}
add(){
  this.router.navigateByUrl("address")
}


proceed(){
  if(this.address1 != null){
  this.router.navigateByUrl("/"+this.address1+"/payment")}
  else{
    this.sb.open("Please Select Address First","Ok",{duration:2000})
  }
}
address1:any = null
setAddress(location:any){
  this.address1 = location
  console.log(this.address1)
}
}
