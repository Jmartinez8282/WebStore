import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private products: Iproduct[] = [
    {
      id: 's467',
      pName: 'CyberTruck T-Shirt',
      pNameURL: 'CyberTruck T',
      pDesc: 'Black soft Cotton t-shirt image of cyber truck broken glass',
      additionalInfo: 'image displays shatter glass of cyber truck',
      price: '$11.00',
      imageURL: "../../assets/Images/ImageS1.png"
    },
    {
      id: 's468',
      pName: 'Ninja Starzzzz',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: 'Free',
      imageURL: '../../assets/Images/ImageX1.png'
    },
    {
      id: 's469',
      pName: 'Ninja Starszzzzzzzzzzz',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$1111.00',
      imageURL: '../../assets/Images/ImageX1.png'
    },
    {
      id: 's470',
      pName: 'Ninja Starszzzzzzzzzzzzzzzz',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$111.00',
      imageURL: '../../assets/Images/ImageX1.png'
    },
    {
      id: 's471',
      pName: 'Ninja ',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$11.00',
      imageURL: '../../assets/Images/ImageX1.png'
    }
  ]
  constructor() { }
  getProducts(): Iproduct[] {

    return this.products;
  }
  getProduct(sku: string): Observable<Iproduct> {
    return of(
      this.products.find(
        x => x.id === sku
      ));
  }
}
