import { LoginService } from './login.service';
import { Restaurant } from './../models/restaurant';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cuisine } from '../models/cuisine';
import { Feedback } from '../models/feedback';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(private http:HttpClient,private login:LoginService) { }
  restaurant:any
  clicked:boolean=false
  get header() {
    return new HttpHeaders (
      {
        "authorization" : "Bearer " +String(localStorage.getItem("token"))
      }
    );
  }
  getCuisine(id:any):Observable<any>{
   return this.http.get("http://localhost:9000/restaurant/cuisine/"+id)
  }



  searchResAndCusName(name:any){
    this.http.get("http://localhost:9000/restaurant/find/"+name)
  }

  // ============
  addToCart(cuisine:Cuisine):Observable<any>{
    return this.http.post("http://localhost:9000/api/v1/user/cart/"+localStorage.getItem("email"),cuisine,{headers:this.header})
   }
  //  =========
   getCartData():Observable<any>{
    return this.http.get("http://localhost:9000/api/v1/user/cartList/"+localStorage.getItem("email"),{headers:this.header})
   }
   getResturantById(id:any):Observable<any>{
    console.log("I am working "+id )
    return this.http.get("http://localhost:9000/restaurant/getRestaurant/"+id)
   }
   addFeedback(feedback:Feedback,id:number):Observable<any>{
    return this.http.post("http://localhost:9000/restaurant/feedback/"+id,feedback)
  }
  getFeedbacks(restaurantId:number):Observable<any>{
    return this.http.get("http://localhost:9000/restaurant/feedbacks/"+restaurantId)
  }

  // ================
  getIfLiked(restaurantId:any){
    return this.http.get("http://localhost:9000/api/v1/user/getFavorites/"+localStorage.getItem('email')+"/"+restaurantId,{headers:this.header})
    // +id+"/"+restaurantId)
  }

  addRating(restaurantId:any,rating:any):Observable<any>{
   return this.http.post("http://localhost:9000/restaurant/addRating/"+localStorage.getItem('email')+"/"+restaurantId,rating)
  }
  getRating(restaurantId:any):Observable<any>{
    return this.http.get("http://localhost:9000/restaurant/getRating/"+localStorage.getItem('email')+"/"+restaurantId)
  }

  deleteCuisineByVendor(restaurantId:any,cuisineId:any):Observable<any>{
    return this.http.delete("http://localhost:9000/restaurant/deleteCuisine/"+restaurantId+"/"+cuisineId)
  }
  updateCuisineByVendor(restaurantId:number,cusisine:Cuisine):Observable<any>{
    return this.http.put("http://localhost:9000/restaurant/updateCuisine/"+restaurantId,cusisine)
  }
  findRestaurantBycityAndName(name:string,city:string):Observable<any>{
    return this.http.get("http://localhost:9000/restaurant/find/"+name+"/"+city)
  }

  findRestaurantBycity(city:string):Observable<any>{
    return this.http.get("http://localhost:9000/restaurant/byCity/"+city)
  }
  updateImage(id:any,image:any){
    const formdata = new FormData();
    formdata.append('image', image);
    return this.http.put("http://localhost:9000/api/v1/image/update/image/"+id,formdata)
  }
  getCuisineById(id:any,cuisineId:string){
    // http://localhost:9000/restaurant/getCuisine/1/1Mutton Biryani
    return this.http.get("http://localhost:9000/restaurant/getCuisine/"+id+"/"+cuisineId)

  }
}
