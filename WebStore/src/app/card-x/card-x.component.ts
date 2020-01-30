import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-card-x',
  templateUrl: './card-x.component.html',
  styleUrls: ['./card-x.component.scss']
})
export class CardXComponent implements OnInit {
  productXList: Iproduct[];
  constructor(private XService:DataService) { }

  ngOnInit() {
    this.productXList = this.XService.getXProducts();

}
}