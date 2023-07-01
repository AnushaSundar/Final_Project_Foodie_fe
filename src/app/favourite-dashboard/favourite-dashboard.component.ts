import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../models/restaurant';
import { CityService } from '../services/city.service';
import { RestaurantService } from '../services/restaurant.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-favourite-dashboard',
  templateUrl: './favourite-dashboard.component.html',
  styleUrls: ['./favourite-dashboard.component.css']
})
export class FavouriteDashboardComponent {
  binding:string="";
  rating3: number;
  constructor(private user:UserService,private fb: FormBuilder,private city:CityService,private activate:ActivatedRoute,private restaurant:RestaurantService,private router:Router){
    this.rating3 = 0;
  }
  currentCity:any =""
  restaurants:number[] = []
  // resArray:any[]=[]



ngOnInit() {

  // this.activate.paramMap.subscribe(
  //   data => {
  //     let id = data.get('id') ?? 0;
  //     this.currentCity=id;
  //     console.log(this.currentCity)
  //     this.restaurant.findRestaurantBycity(this.currentCity).subscribe(res=>{console.log(res)
  //       this.restaurants=res;
  //       })
  //   }
  // )

  this.user.getLikedRestaurant().subscribe(res=>{
    this.restaurants=res;
    console.log(this.restaurants)
  },err=>{
    console.log(err)
  });
  
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

