import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { DataService } from '../services/data.service';
import { CartServices } from '../services/cart.service';

@Component({
  selector: 'app-card-s',
  templateUrl: './card-s.component.html',
  styleUrls: ['./card-s.component.scss']
})
export class CardSComponent implements OnInit {
productList: Iproduct[];
  constructor(private dService:DataService,private CartService:CartServices) { }

  ngOnInit() {
    this.productList = this.dService.getProducts();
  }
  addToCart(item){
    this.CartService.addItemsToCart(item);
    }
}
