import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../models/restaurant';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-favourite-card',
  templateUrl: './favourite-card.component.html',
  styleUrls: ['./favourite-card.component.css']
})
export class FavouriteCardComponent {
  constructor(private restaurant1:RestaurantService,private route:Router,private active:ActivatedRoute){}
  @Input() restaurantId: any
  restaurant:Restaurant = {}
  ngOnInit() {
    this.restaurant1.getResturantById(Number(this.restaurantId)).subscribe(
      res=>{
        this.restaurant = res
      }
    )
  }

  onClick(){
    // this.restaurant1.restaurant = this.restaurant.id
    this.route.navigateByUrl("/cuisineDashboard/"+this.restaurant.id)
  }
}
