import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { DataService } from '../services/data.service';
import { CartServices } from '../services/cart.service';

@Component({
  selector: 'app-card-y',
  templateUrl: './card-y.component.html',
  styleUrls: ['./card-y.component.scss']
})
export class CardYComponent implements OnInit {

  productYList: Iproduct[];
  constructor(private YService:DataService,private CartService:CartServices) { }

  ngOnInit() {
    this.productYList = this.YService.getYProducts();

}
addToCart(item){
  this.CartService.addItemsToCart(item);
}
}