import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CartServices {
  cartItems: Iproduct[] =[];
  public $cartItems = new BehaviorSubject<Iproduct[]>(this.cartItems);
 cartTotal = 0;
 $cartTotal = new BehaviorSubject<number>(this.cartTotal);
 
 cartQuantity = 0;
 $cartQuanity = new BehaviorSubject<number>(this.cartQuantity);
  constructor() { }
  removeProduct(item,index){
    this.cartItems.splice(index, 1);
    const totalPrice = item.quantity * +item.price;
    this.cartTotal = totalPrice;
    this.cartTotal -= totalPrice;
    this.cartQuantity -= item.quantity;
  
  this.$cartItems.next(this.cartItems);
  this.$cartTotal.next(this.cartTotal);
  this.$cartQuanity.next(this.cartQuantity);
  
  }
  
    addItemsToCart(item:Iproduct){
      let cartItem = this.cartItems.find(x=> x.id === item.id);
      if (cartItem){
        cartItem.quantity++;
      }else{
          item.quantity = 1;
          this.cartItems.push(item);
      }
       this.cartQuantity++;
          console.log(this.cartItems);
        
        
      
     
      this.$cartItems.next(this.cartItems);
      this.cartTotal += +item.price;
    
      
      this.$cartTotal.next(this.cartTotal);
      this.$cartQuanity.next(this.cartQuantity);
    }
}
