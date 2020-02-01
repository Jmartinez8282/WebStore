import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { DataService } from '../services/data.service';
import { CartServices } from '../services/cart.service';

@Component({
  selector: 'app-model-s',
  templateUrl: './model-s.component.html',
  styleUrls: ['./model-s.component.scss']
})
export class ModelSComponent implements OnInit {
  productList: Iproduct[];
  constructor(private dService:DataService, private CardSerice: CartServices) { }

  ngOnInit() {
    this.productList = this.dService.getProducts();
    console.log(this.productList);
  }
addToCart(item){
this.CardSerice.addItemsToCart(item);
}
}



