import { Cuisine } from './../models/cuisine';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from './../services/restaurant.service';
import { Restaurant } from './../models/restaurant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-cusisine-dashboard',
  templateUrl: './vendor-cusisine-dashboard.component.html',
  styleUrls: ['./vendor-cusisine-dashboard.component.css']
})
export class VendorCusisineDashboardComponent implements OnInit {
  constructor(private restaurant:RestaurantService,private activate:ActivatedRoute,private router:Router){}
  id :any
  ngOnInit(): void {
    this.activate.paramMap.subscribe(
      data => {
        this.id = data.get('id') ?? 0;
        this.restaurant.getCuisine(+this.id).subscribe(
          res => {
            this.cuisines = res
          }
        );
      }
    )
  }
  cuisines:Cuisine[] = []

  add(){
    this.router.navigateByUrl(this.id+"/addCuisine")
  }
  deleted(){
    this.ngOnInit()
  }
}
