import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { DataService } from '../services/data.service';
import { CartServices } from '../services/cart.service';

@Component({
  selector: 'app-cardm3',
  templateUrl: './cardm3.component.html',
  styleUrls: ['./cardm3.component.scss']
})
export class Cardm3Component implements OnInit {

  productEList: Iproduct[];
  constructor(private EService:DataService,private CartService:CartServices) { }

  ngOnInit() {
    this.productEList = this.EService.getEProducts();
  }
  addToCart(item){
    this.CartService.addItemsToCart(item);
    }

}

