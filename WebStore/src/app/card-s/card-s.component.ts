import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-card-s',
  templateUrl: './card-s.component.html',
  styleUrls: ['./card-s.component.scss']
})
export class CardSComponent implements OnInit {
productList: Iproduct[];
  constructor(private dService:DataService) { }

  ngOnInit() {
    this.productList = this.dService.getProducts();
  }

}
