import { Route, Router } from '@angular/router';
import { Cuisine } from './../models/cuisine';
import { Restaurant } from './../models/restaurant';
import { RestaurantService } from './../services/restaurant.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-vendor-cusisine-card',
  templateUrl: './vendor-cusisine-card.component.html',
  styleUrls: ['./vendor-cusisine-card.component.css']
})
export class VendorCusisineCardComponent implements OnInit{
  constructor(private serviceRest:RestaurantService,private router :Router){}
  @Input() restaurantId :any
  ngOnInit(): void {

  }
@Input() cuisine:Cuisine={
  price: 0,
  quantity: 0
}

@Output() deleted :EventEmitter<Boolean> = new EventEmitter<Boolean>()

  delCuisine(id:any){
    console.log(id)
    this.serviceRest.deleteCuisineByVendor(this.restaurantId, id).subscribe(
      res => {
        this.deleted.emit(true)
      }
    )

  }

  editCuisine(cuisineId:any){
  this.router.navigateByUrl("/VendorcuisineForm/"+this.restaurantId+"/cuisineId/"+cuisineId)
  }
}
