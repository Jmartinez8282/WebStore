import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { DataService } from '../services/data.service';
import { CartServices } from '../services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  productTList: Iproduct[];
  constructor(private TService:DataService,private CartService:CartServices) { }

  ngOnInit() {
    this.productTList = this.TService.getTProducts();

}
addToCart(item){
  this.CartService.addItemsToCart(item);

}
}
