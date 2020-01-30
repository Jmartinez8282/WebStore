import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  productTList: Iproduct[];
  constructor(private TService:DataService) { }

  ngOnInit() {
    this.productTList = this.TService.getTProducts();

}

}
