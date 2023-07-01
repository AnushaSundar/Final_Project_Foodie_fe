import { Restaurant } from './../models/restaurant';
import { RestaurantService } from './../services/restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { CityService } from './../services/city.service';
import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.css']
})
export class RestaurantEditComponent {
  constructor(private fb:FormBuilder,private city1:CityService,private resService:RestaurantService, private _snackbar:MatSnackBar, private userservice:UserService,private activate:ActivatedRoute,private route:Router){}
  form:FormGroup|any
  submitForm(){
    console.log(this.form.value)
    let restaurant:Restaurant = {
      id:this.restaurant.id,
      name:this.form.value.name,
      description:this.form.value.description,
      city:this.form.value.city
    }
    this.userservice.updateRestaurantByVendor(restaurant).subscribe(res=>{console.log("formUpdated");
  this._snackbar.open("your Restaurant is updated", "Ok",{duration:2000});

    this.route.navigateByUrl("/vendorRestaurantDashboard")
    })
  }
  onFileSelected(event:any){
  }
  editProfile(img:HTMLInputElement){}
  restaurant:Restaurant={}

  cities:String[]=[];
  ngOnInit(): void {
    this.activate.paramMap.subscribe(
      data => {
       let id = data.get('id') ?? 0;
        this.resService.getResturantById(id).subscribe((res:Restaurant)=>{
          this.restaurant=res
          this.form = this.fb.group({
            name: [this.restaurant.name, Validators.required],
            description: [this.restaurant.description, Validators.required],
            city: ['', ],
            // image: ['', ],
          });
        })
      }
    )
    this.city1.getCity().subscribe(
      res=> {
        this.cities = res
      }
    )
  }
  updateImage(event:any){
    this.resService.updateImage( this.restaurant.image,event.target.files[0]).subscribe(res=>{console.log("succesImage");

    let img:any = document.getElementById("profile-img")
    img.src = window.URL.createObjectURL(event.target.files[0])
    console.log(img.src)
  this._snackbar.open("your Image is updated", "Ok",{duration:2000});

    })
  }
}
