import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';
import { Component, Input } from '@angular/core';
import { Restaurant } from '../models/restaurant';

@Component({
  selector: 'app-restaurant-cards',
  templateUrl: './restaurant-cards.component.html',
  styleUrls: ['./restaurant-cards.component.css']
})
export class RestaurantCardsComponent {
  constructor(private restaurant1:RestaurantService,private route:Router,private active:ActivatedRoute){}
  @Input() restaurant: Restaurant = {}
  ngOnInit() {
    console.log(this.restaurant.image)
  }

  onClick(){
    // this.restaurant1.restaurant = this.restaurant.id
    this.route.navigateByUrl("/cuisineDashboard/"+this.restaurant.id)
  }
}
