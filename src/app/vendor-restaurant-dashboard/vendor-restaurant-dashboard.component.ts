import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-vendor-restaurant-dashboard',
  templateUrl: './vendor-restaurant-dashboard.component.html',
  styleUrls: ['./vendor-restaurant-dashboard.component.css']
})
export class VendorRestaurantDashboardComponent {

  constructor(private userSerice:UserService,private router:Router){}
  restaurants:any[] = []
  ngOnInit(): void {
    this.userSerice.getVendorRestaurant().subscribe(
      res=>{
        this.restaurants =res
      }
    )
  }
  add(){
    this.router.navigateByUrl("/addRestaurant")
  }


  deleted(){
    this.ngOnInit()
  }
}
