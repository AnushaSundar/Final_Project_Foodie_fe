import { Cuisine } from './../models/cuisine';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from './../services/restaurant.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cuisine-edit',
  templateUrl: './cuisine-edit.component.html',
  styleUrls: ['./cuisine-edit.component.css']
})
export class CuisineEditComponent {
  cuisineForm: FormGroup | any
  cuisine:Cuisine ={
    image: 0,
    id: "",
    name:"",
    description:"",
    price: 0,
    quantity: 0
  }
  constructor(private fb:FormBuilder,private restaurantService:RestaurantService,private activate:ActivatedRoute,private router:Router,private _snackbar:MatSnackBar){}

  id:any

  ngOnInit(){
    this.activate.paramMap.subscribe(
      data => {
        console.log(JSON.stringify(data)+"param is reqiired")
         this.id = data.get('id') ?? 0;
         const cuisineId = data.get("cuisineId") ?? "";
          this.restaurantService.getCuisineById(this.id,cuisineId).subscribe(
            (res:Cuisine|any)=>{
              this.cuisine.id = res.id
              this.cuisine.image = res.image
              this.cuisine.name = res.name
              this.cuisine.description = res.description
              this.cuisine.price = Number(res.price)
              this.cuisine.type = res.type
              console.log(this.cuisine.price + "price")


              this.cuisineForm = this.fb.group({
                name: [res.name, Validators.required],
                description: [res.description, Validators.required],
                price: [res.price, [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/) , Validators.min(1)]],
                type: ['', Validators.required],
                // tags: ['',[]],
                // image: [""]
              });
            }
          )
        })

  }
 
  onSubmit(){
    // this.activate.paramMap.subscribe(
    //   data => {
    //     console.log(data+"param is reqiired")
    //     // let id:any = data.get('id') ?? 0;
    //     )
    //   }
    // )
    console.log(this.cuisineForm.value);
    console.log(this.id);


    const cuisine :Cuisine ={
      id: this.cuisine.id,
      name:this.cuisineForm.value.name,
      description:this.cuisineForm.value.description,
      price: this.cuisineForm.value.price,
      type: this.cuisineForm.value.type,
      quantity: 0
    }


    this.restaurantService.updateCuisineByVendor(this.id,cuisine).subscribe(res=>{console.log("updateSuccess");
    this.router.navigateByUrl("vendorcuisineDashboard/"+this.id)
    this._snackbar.open("your Cuisine is updated", "Ok",{duration:2000});
        },err=>{console.log("notUpdated")})

  }
  onFileSelected(event:any){
  }
  updateImage(event:any){
    // this.restaurantService.updateImage( this.cuisine.image,event.target.files[0]).subscribe(res=>{console.log("succesImage");
    // this.user.image = this.user.image
    this.restaurantService.updateImage( this.cuisine.image,event.target.files[0]).subscribe(res=>{console.log("succesImage");
    let img:any = document.getElementById("profile-img")
    img.src = window.URL.createObjectURL(event.target.files[0])
    console.log(img.src)
    })
  }
}
