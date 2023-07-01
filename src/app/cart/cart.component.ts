import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Cuisine } from '../models/cuisine';
import { Order } from '../models/order';
import { RestaurantService } from '../services/restaurant.service';
import { UserService } from '../services/user.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  order1:Order={}
  constructor(private service:RestaurantService,private userService:UserService,private router:Router,private cart: CartService){}
  total = 0


  cuisines:Cuisine[]=[];
  length:number=this.cuisines.length;
  ngOnInit(): void {
    this.service.getCartData().subscribe(data=>{this.cuisines=data;
      for(let cuisine of data){
        let price=cuisine.price
        let quantity=cuisine.quantity
       this.userService.getCartTotal().subscribe(
          res =>{
            this.total =  res
          }
        )
        console.log(this.total)
      }
    })
  }

delete(result:Cuisine){
console.log(result.id)
this.userService.deleteCuisine(result).subscribe(data=>{
this.total=0;
this.ngOnInit();
console.log(data);
this.userService.getCartItems().subscribe(
  res=>{
    // this.cartLength = res
    this.cart.cartLength = Number(res)
  }
)
})
}
setQuantity(cuisine:Cuisine){
  if(cuisine.quantity > 0){
  console.log(cuisine)
  console.log(cuisine.quantity)
  this.userService.setQuantity(cuisine,cuisine.quantity).subscribe(
    res=> {this.ngOnInit()}
  )}
  else{
    if(window.confirm("If quantity is 0 item will be removed from list")){
    this.delete(cuisine)}
    else{
      cuisine.quantity = 1
      this.setQuantity(cuisine)
    }

  }
}


decrementQuantity(cuisine:Cuisine) {
  if (cuisine.quantity > 0) {
    cuisine.quantity--;
    this.setQuantity(cuisine)
  }
}

incrementQuantity(cuisine:Cuisine) {
  cuisine.quantity++;
  this.setQuantity(cuisine)
}

  order(){
    let cartLength :number|any = 0
    this.userService.getCartItems().subscribe(
      res=>{
        // this.cartLength = res
       cartLength = Number(res)
       if(cartLength > 0){
        // if(window.confirm("After You Order Your Order Will Be Placed")){
        this.order1.cuisines=this.cuisines;
        // this.userService.placeOrder(this.order1).subscribe(data=>{
          // alert("Your bill amount: "+data.totalBillAmount)
        this.router.navigateByUrl("/addressdash")

          // console.log(data);
          this.userService.getCartItems().subscribe(
            res=>{
              // this.cartLength = res
              console.log(res)
              this.cart.cartLength = Number(res)
            }
          )
        // })
      // }
    }
      else{
        window.alert("Please add items to cart first")
      }


      }
    )




}
  goBack(){
    console.log(localStorage.getItem("currCity"))
    if(localStorage.getItem("currCity") == "" || localStorage.getItem("currCity") == null){
      this.router.navigateByUrl('/dashboard')}
      else{
        this.router.navigateByUrl("/"+ localStorage.getItem("currCity")+"/restaurantDashboard")
      }
  }
}
