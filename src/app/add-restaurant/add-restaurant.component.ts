import { Router } from '@angular/router';
import { CityService } from './../services/city.service';
import { Restaurant } from './../models/restaurant';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  image1:any;
  // form: FormGroup;
  cities:String[]=[];
  constructor(private fb: FormBuilder,private userService:UserService,private city1:CityService,private router:Router,private _snackbar:MatSnackBar) {

  }
  ngOnInit(): void {
    this.city1.getCity().subscribe(
      res=> {
        this.cities = res
      }
    )
  }

  form:FormGroup|any = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    city: ['', Validators.required],
    image: ['', Validators.required],
  });

  onFileSelected(event:any){
    this.image1 = event.target.files[0];
  }


  convert(restaurant:Restaurant):FormData{
    const formdata = new FormData();
    formdata.append('restaurant',
    new Blob([JSON.stringify(restaurant)],{type:'application/json'})
    );
    formdata.append('image', this.image1

        // ,this.image1.name
        );

  return formdata;
  }

  submitForm() {
    // console.log(this.form.value.city)
    if (this.form.invalid) {
      // this.snackBar.open('Please fill in all required fields', 'Dismiss', { duration: 3000 });
      return;
    }
    let restaurant:Restaurant = {};
    restaurant.city = this.form.value.city
    restaurant.name = this.form.value.name
    restaurant.description = this.form.value.description
    restaurant.id = 209
    this.userService.addRestaurant(this.convert(restaurant));
    this._snackbar.open("Resturant is added", "Ok",{duration:2000});
    // Submit form data here

  }
}
