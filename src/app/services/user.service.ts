import { Router } from '@angular/router';
import { Address } from './../models/address';
import { Restaurant } from './../models/restaurant';
import { Observable } from 'rxjs';
import { User } from './../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { User } from '../models/user';
import { LoginService } from './login.service';
import { Order } from '../models/order';
import { Cuisine } from '../models/cuisine';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loginID:any
  totalAmount:any
  get header() {
    return new HttpHeaders (
      {
        "authorization" : "Bearer " +String(localStorage.getItem("token"))
      }
    );
  }

  constructor(private http: HttpClient,private login:LoginService,private router:Router,private _snackbar:MatSnackBar) { }
  register(user:FormData){
    console.log(user)

    this.http.post("http://localhost:9000/api/v1/register",user).subscribe({
      next:(data:any)=>{
        if(data!="")
        {
  this._snackbar.open("Successfully registered", "Ok",{duration:2000});

          this.router.navigateByUrl("/login")
          console.log(data)
        }
      }
  })
  }
  vendor(user:User):Observable<any>{
    console.log("is working")
   return this.http.post("http://localhost:9000/api/v1/user/vendor",user,{headers:this.header})
  }
  addRestaurant(restaurant:FormData){
    // const headers = new HttpHeaders (
    //   {
    //     "authorization" : "Bearer " +String(localStorage.getItem("token"))
    //   }
    // );
    this.http.post("http://localhost:9000/api/v1/user/restaurant/"+localStorage.getItem('email'),restaurant
    // this.login.user.email
    ,{headers:this.header}
    ).subscribe(
      async res=>{console.log("added");
      let restaurant:Restaurant = res
      this.router.navigateByUrl(restaurant.id+"/addCuisine")
    }
    )
  }
  // -------------
  addCuisine(cuisine:FormData,restaurantId:any){
    cuisine.forEach(data=>{console.log(data)})
    this.http.post("http://localhost:9000/restaurant/cuisine/"+localStorage.getItem('email')+"/"+restaurantId,cuisine).subscribe(
      res=>{console.log(res+"cuisine method")
      this.router.navigateByUrl("/vendorcuisineDashboard/"+restaurantId)}
    )
  }
// ---------------
  getRestaurant():Observable<any>{
    return this.http.get("http://localhost:9000/restaurant/getAll")
  }

  placeOrder(order:Order):Observable<any>{
    return this.http.post("http://localhost:9000/api/v1/user/"+localStorage.getItem('email')+"/order",order ,{headers:this.header})
  }
  getOrders():Observable<any>{
    return this.http.get("http://localhost:9000/api/v1/user/allOrders/"+localStorage.getItem('email') ,{headers:this.header})
  }
  deleteCuisine(cuisine:Cuisine):Observable<any>{
    return this.http.post("http://localhost:9000/api/v1/user/delete/"+localStorage.getItem('email'),cuisine ,{headers:this.header})
  }

  setQuantity(cusine:Cuisine,quantity:number):Observable<any>{
    return this.http.post("http://localhost:9000/api/v1/user/setQuantity/"+localStorage.getItem('email')+"/"+quantity,cusine ,{headers:this.header})
  }

  removeFav(restaurantId:any):Observable<any>{
   return this.http.delete("http://localhost:9000/api/v1/user/removeFavorite/"+localStorage.getItem('email')+"/"+restaurantId ,{headers:this.header})
  }
  addFav(restaurantId:any):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
                                     .set("authorization" , "Bearer " +String(localStorage.getItem("token")))
   return this.http.post("http://localhost:9000/api/v1/user/favorite/"+localStorage.getItem('email'),JSON.stringify(restaurantId),{ headers: headers })
  //  +this.login.user.email,restaurantId)
  }


  getAddress():Observable<any>{
    return this.http.get("http://localhost:9000/api/v1/user/getAddress/"+localStorage.getItem('email') ,{headers:this.header})
  }

  addAddress(address:Address):Observable<any>{
    return this.http.post("http://localhost:9000/api/v1/user/address/"+localStorage.getItem('email'),address ,{headers:this.header})
  }

  deleteAddress(id:string):Observable<any>{
    return this.http.delete("http://localhost:9000/api/v1/user/delete/address/"+localStorage.getItem('email')+"/"+id ,{headers:this.header})
  }

  updateAddress(address:Address):Observable<any>{
   return this.http.put("http://localhost:9000/api/v1/user/editAddress/"+localStorage.getItem('email'),address ,{headers:this.header})
  }

  getVendorRestaurant():Observable<any>{
    return this.http.get("http://localhost:9000/api/v1/user/get/vendor/restaurant/"+localStorage.getItem('email') ,{headers:this.header})
  }
  deleteRestaurantByVendor(restaurantId:any):Observable<any>{
    return this.http.delete("http://localhost:9000/api/v1/user/deleteRestaurant/"+localStorage.getItem('email')+"/"+restaurantId ,{headers:this.header})
  }
  updateRestaurantByVendor(restaurant:Restaurant):Observable<any>{
    return this.http.put("http://localhost:9000/api/v1/user/updateRestaurant",restaurant ,{headers:this.header})
  }
  getUser():Observable<any>{
    const headers = new HttpHeaders (
      {
       "authorization" : "Bearer "+ localStorage.getItem("token")
      }
    );
    return this.http.get("http://localhost:9000/api/v1/user/"+localStorage.getItem('email'),{headers:headers})
  }
  updateUser(user:User):Observable<any>{
    const headers = new HttpHeaders (
      {
       "authorization" : "Bearer "+ localStorage.getItem("token")
      }
    );
    return this.http.put("http://localhost:9000/api/v1/user/update",user,{headers:headers})
  }


  updateImage(id:any,image:any){
    const formdata = new FormData();
    formdata.append('image', image);
    return this.http.put("http://localhost:9000/api/v1/image/update/image/"+id,formdata)
  }

  getCartItems(){
    return this.http.get("http://localhost:9000/api/v1/user/cartItems/"+localStorage.getItem("email") ,{headers:this.header})
  }



  getLikedRestaurant():Observable<any>{
    return this.http.get("http://localhost:9000/api/v1/user/getLiked/restaurant/"+localStorage.getItem("email") ,{headers:this.header})
  }

  getAddedToCart(cuisineId:any):Observable<any>{
    return this.http.get("http://localhost:9000/api/v1/user/addedTo/cart/"+localStorage.getItem("email")+"/"+cuisineId ,{headers:this.header})
  }


  getCartTotal():Observable<any>{
    return this.http.get("http://localhost:9000/api/v1/user/get/cartTotal/"+localStorage.getItem("email") ,{headers:this.header})
  }
  getAddressById(addressId:any):Observable<any>{
    return this.http.get("http://localhost:9000/api/v1/user/get/address/"+localStorage.getItem("email")+"/"+addressId ,{headers:this.header})
  }
}

