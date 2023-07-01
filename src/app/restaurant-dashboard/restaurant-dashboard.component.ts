import { RestaurantService } from './../services/restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from './../services/city.service';
import { UserService } from './../services/user.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-restaurant-dashboard',
  templateUrl: './restaurant-dashboard.component.html',
  styleUrls: ['./restaurant-dashboard.component.css']
})
export class RestaurantDashboardComponent {
  binding:string="";
  rating3: number;
  constructor(private user:UserService,private fb: FormBuilder,private city:CityService,private activate:ActivatedRoute,private restaurant:RestaurantService,private router:Router){
    this.rating3 = 0;
  }
  currentCity:any =""
  restaurants: Restaurant[] = []
  cities:string[] = []
ngOnInit() {
  this.city.getCity().subscribe(
    res=> {
      this.cities = res
    }
  )
  this.activate.paramMap.subscribe(
    data => {
      let id = data.get('id') ?? 0;
      this.currentCity=id;
      console.log(this.currentCity)
      this.restaurant.findRestaurantBycity(this.currentCity).subscribe(res=>{console.log(res)
        this.restaurants=res;
        })
    }
  )
}
search(){
  console.log(this.currentCity + "search")
  console.log(this.binding + "search")
if(this.binding==""){
  localStorage.setItem("currCity",this.currentCity)
this.restaurant.findRestaurantBycity(this.currentCity).subscribe(res=>{console.log(res)
this.restaurants=res;
this.router.navigateByUrl("/"+this.currentCity+"/restaurantDashboard")
})
}
else {
  localStorage.setItem("currCity",this.currentCity)
  this.restaurant.findRestaurantBycityAndName(this.binding, this.currentCity).subscribe(res => {
    console.log(res);
    this.restaurants = res;
  });
}
}
// change (){
//   console.log(this.rating3)
// }

onMenuChange(event:any){
  console.log(event.target.value)
  this.currentCity = event.target.value
  console.log(this.currentCity)
}
}


