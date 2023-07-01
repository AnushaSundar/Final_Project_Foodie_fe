import { RestaurantService } from './../services/restaurant.service';
import { Restaurant } from './../models/restaurant';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Cuisine } from '../models/cuisine';
import { enableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-cuisine-dashboard',
  templateUrl: './cuisine-dashboard.component.html',
  styleUrls: ['./cuisine-dashboard.component.css']
})
export class CuisineDashboardComponent {
  cuisines: Cuisine[] = []
  id:any
  isVeg:boolean = false
  onOpen:boolean= true;
  value:boolean=false;
  cuisines1: Cuisine[] = []
  constructor(private route:Router,private restuarant :RestaurantService,private activate:ActivatedRoute){}
  ngOnInit(): void {
    this.activate.paramMap.subscribe(
      data => {
       this.id = data.get('id') ?? 0;
        this.restuarant.getCuisine(+this.id).subscribe(
          res => {
            this.cuisines1 = res
            this.cuisines = this.cuisines1
          }
        );
      }
    )
  }
  onChange(event:any){
    console.log(event)
    this.onOpen = event
  }
  feed1:boolean = false
  feed(event:boolean) {
    this.feed1 = true
    // this.feed1 = false
  }
  feed2(event:boolean){
    this.feed1 = false
  }
  cuisneFilter(event:any){
    if(event.checked){
      this.cuisines = this.cuisines1.filter(cuisine => cuisine.type === "Veg")
    }
    else{this.cuisines = this.cuisines1}
  }

  cuisineName :any
  search(){
    if(this .cuisineName != "" || this .cuisineName != null){
      this.cuisines = this.cuisines1.filter((cuisine:any) => cuisine.name.toLowerCase().includes(this.cuisineName.toLowerCase()))
    }
    else{
      this.cuisines = this.cuisines1
    }
  }
}
