import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // constructor(private uS:UserService, private http:HttpClient) { }
  cartLength:number = 0
  //  getCartLength():number{
  //   let n:number = 0
  //   this.uS.getCartItems().subscribe(
  //     (res:any)=>{
  //       n = res
  //       return n
  //     }
  //   )
  //   return n
  // }
}
