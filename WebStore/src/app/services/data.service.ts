import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { Observable,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
private products: Iproduct[]=[
  {
    id: '1',
    pName: 'Ninja Stars',
    pNameURL: 'NinjaStars',
    pDesc: 'Something to do with Ninja Stars',
    additionalInfo: 'They can cause a paper cut',
    price: '$1.00'
  },
  {
    id: '2',
    pName: 'Ninja Starzzzz',
    pNameURL: 'NinjaStars',
    pDesc: 'Something to do with Ninja Stars',
    additionalInfo: 'They can cause a paper cut',
    price: 'Free'
  },
  {
    id: '3',
    pName: 'Ninja Starszzzzzzzzzzz',
    pNameURL: 'NinjaStars',
    pDesc: 'Something to do with Ninja Stars',
    additionalInfo: 'They can cause a paper cut',
    price: '$1111.00'
  },
  {
    id: '4',
    pName: 'Ninja Starszzzzzzzzzzzzzzzz',
    pNameURL: 'NinjaStars',
    pDesc: 'Something to do with Ninja Stars',
    additionalInfo: 'They can cause a paper cut',
    price: '$111.00'
  },
  {
    id: '5',
    pName: 'Ninja ',
    pNameURL: 'NinjaStars',
    pDesc: 'Something to do with Ninja Stars',
    additionalInfo: 'They can cause a paper cut',
    price: '$11.00'
  }
]
  constructor() { }
  getProducts():Iproduct []{
  
    return this.products;
  }
  getProduct(sku: string):Observable<Iproduct>{
    return of(
    this.products.find(
      x => x.id === sku
    ));
  }
}
