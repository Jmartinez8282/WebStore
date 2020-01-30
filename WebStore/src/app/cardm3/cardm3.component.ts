import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cardm3',
  templateUrl: './cardm3.component.html',
  styleUrls: ['./cardm3.component.scss']
})
export class Cardm3Component implements OnInit {

  productEList: Iproduct[];
  constructor(private EService:DataService) { }

  ngOnInit() {
    this.productEList = this.EService.getEProducts();
  }

}
