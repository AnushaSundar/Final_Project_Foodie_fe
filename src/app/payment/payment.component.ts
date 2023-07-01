import { Cuisine } from './../models/cuisine';
import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Restaurant } from '../models/restaurant';
import { RestaurantService } from '../services/restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../models/address';
import { CartService } from '../services/cart.service';
import { Order } from '../models/order';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

constructor(private service:RestaurantService,private userService:UserService,private active:ActivatedRoute,private cart:CartService,private router:Router,private sb:MatSnackBar){}
cuisines:Cuisine[] = []
total:any
address:Address|any
ngOnInit(){
this.service.getCartData().subscribe(
  res=>{this.cuisines= res
  this.userService.getCartTotal().subscribe(
  res =>{
    this.total =  res
  }
)}
)
this.active.paramMap.subscribe(
  data =>{
    let id = data.get('id') ?? 0;
    this.userService.getAddressById(id).subscribe(
      res=>{
        this.address = res
      }
    )
  }

)


}


order(){
  let order1:Order = {}
  order1.address = this.address
  order1.cuisines = this.cuisines
      if(window.confirm("After You Order Your Order Will Be Placed")){
      this.userService.placeOrder(order1).subscribe(data=>{
        this.userService.getCartItems().subscribe(
          res=>{
            // this.cartLength = res
            console.log(res)
            this.cart.cartLength = Number(res)
            this.sb.open("Order Placed Successfully","Ok",{duration:2000})
            this.router.navigateByUrl("/cart")

          }
        )
      })
    }
}

}
