import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-card-ct',
  templateUrl: './card-ct.component.html',
  styleUrls: ['./card-ct.component.scss']
})
export class CardCtComponent implements OnInit {

  productCList: Iproduct[];
  constructor(private CService:DataService) { }

  ngOnInit() {
    this.productCList = this.CService.getCProducts();

}

}
