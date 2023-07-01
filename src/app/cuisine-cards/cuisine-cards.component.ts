import { CartComponent } from './../cart/cart.component';
import { UserService } from './../services/user.service';
import { Component, Input, Output } from '@angular/core';
import { Cuisine } from '../models/cuisine';
import { RestaurantService } from '../services/restaurant.service';
import { CartService } from '../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cuisine-cards',
  templateUrl: './cuisine-cards.component.html',
  styleUrls: ['./cuisine-cards.component.css']
})
export class CuisineCardsComponent {
  constructor(private service:RestaurantService,private userService:UserService,private cart : CartService,private _snackbar:MatSnackBar){}

    @Input() cuisine: Cuisine = {
      price: 0,
      quantity: 0
    }
    addedToCart:boolean= false
    ngOnInit(){
      this.userService.getAddedToCart(this.cuisine.id).subscribe(
        res =>{
          this.addedToCart = res
        }
      )
    }

    addCart(){
      console.log(this.cuisine)
      this.service.addToCart(this.cuisine).subscribe(data=>{console.log(data+"sucess")
      this.userService.totalAmount=data
      this.cart.cartLength = 0
      this.userService.getCartItems().subscribe({
        next:data =>{
          this.cart.cartLength = Number(data)
          console.log(Number(data) + "working")
          this.userService.getAddedToCart(this.cuisine.id).subscribe(
            res =>{
              this.addedToCart = res
            }
          )
        }
      }
        // res => {
        //   this.cart.cartLength = res
        // }

      )
    },err=>{console.log("error")
    this._snackbar.open("Please Login First","Ok",{duration:2000})
  })
        }





        delete(result:Cuisine){
          if(window.confirm("Are you sure you want to remove this item from cart")){
          console.log(result.id)
          this.userService.deleteCuisine(result).subscribe(data=>{
          // this.total=0;
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
        else{}
        }
}
