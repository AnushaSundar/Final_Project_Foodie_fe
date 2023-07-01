import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Restaurant } from './../models/restaurant';
import { RestaurantService } from './../services/restaurant.service';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-vendor-restaurant-card',
  templateUrl: './vendor-restaurant-card.component.html',
  styleUrls: ['./vendor-restaurant-card.component.css']
})
export class VendorRestaurantCardComponent implements OnInit {
  constructor(private restaurantService: RestaurantService,private userService:UserService,private router:Router){}
  @Input() restaurantId:any
  restaurant1:Restaurant ={}
  ngOnInit(): void {
    this.restaurantService.getResturantById(this.restaurantId).subscribe(
      res=>{
        this.restaurant1 = res
      }
    )
  }
  @Output() deleted:EventEmitter<any> = new  EventEmitter<any>()
  delRestaurant(Id:any){
    this.userService.deleteRestaurantByVendor(Id).subscribe(res=>{console.log("deleted");
    this.deleted.emit("true")
  },err=>{console.log("notDeleted");
  })}
  editRestaurant(){
    console.log(this.restaurantId)
    this.router.navigateByUrl(String(this.restaurantId)+"/resturantEditForm")
  }
  click(){
    this.router.navigateByUrl("/vendorcuisineDashboard/"+this.restaurantId)
  }

}
