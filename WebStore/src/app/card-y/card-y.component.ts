import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-card-y',
  templateUrl: './card-y.component.html',
  styleUrls: ['./card-y.component.scss']
})
export class CardYComponent implements OnInit {

  productYList: Iproduct[];
  constructor(private YService:DataService) { }

  ngOnInit() {
    this.productYList = this.YService.getYProducts();

}
}