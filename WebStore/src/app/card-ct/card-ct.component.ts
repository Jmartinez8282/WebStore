import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { DataService } from '../services/data.service';
import { CartServices } from '../services/cart.service';

@Component({
  selector: 'app-card-ct',
  templateUrl: './card-ct.component.html',
  styleUrls: ['./card-ct.component.scss']
})
export class CardCtComponent implements OnInit {

  productCList: Iproduct[];
  constructor(private CService:DataService,private CartService:CartServices) { }

  ngOnInit() {
    this.productCList = this.CService.getCProducts();

}
addToCart(item){
  this.CartService.addItemsToCart(item);

}
}
