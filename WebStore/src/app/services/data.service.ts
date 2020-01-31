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
      pName: 'Model S T-shirt',
      pNameURL: 'Model S T-shirt',
      pDesc: 'Black soft Cotton t-shirt image of model s in development stages',
      additionalInfo: 'Black model s tesla t-shirt prined in front',
      price: '$11.00',
      imageURL: "../../assets/Images/ImageS1.png"
    },
    {
      id: 's468',
      pName: 'Model S T-shirt',
      pNameURL: 'Model S T-shirt',
      pDesc: 'Grey soft cotton t-shirt',
      additionalInfo: 'Image of blue tesla model s',
      price: '$9.00',
      imageURL: '../../assets/Images/ImageS2.png'
    },
    {
      id: 's469',
      pName: 'Model S T-shirt',
      pNameURL: 'Model S T-shirt',
      pDesc: 'fresh model S cotton T-shirt',
      additionalInfo: 'Tesla model S haha, gas t-shirt',
      price: '$10.00',
      imageURL: '../../assets/Images/ImageS3.png'
    },
    {      id: 's470',
      pName: 'Model S T-shirt',
      pNameURL: 'Model S T-shirt',
      pDesc: 'black soft cotton t-shirt',
      additionalInfo: 'Black t-shirt with white image of tesla model s',
      price: '$12.00',
      imageURL: '../../assets/Images/ImageS4.png'
    },
    {
      id: 's471',
      pName: 'Model S T-shirt ',
      pNameURL: 'Model S T-shirt',
      pDesc: 'White soft Cotton t-shirt',
      additionalInfo: 'image of model s in development stages printed in front',
      price: '$11.00',
      imageURL: '../../assets/Images/ImageS5.png'
    },
    {
      id: 's472',
      pName: 'Model S T-shirt ',
      pNameURL: 'Model S T-shirt',
      pDesc: 'White on White T-shirt',
      additionalInfo: 'White cotton T-shirt with with white tesla model s image in front',
      price: '$11.00',
      imageURL: '../../assets/Images/ImageS6.png'
    },
    {
      id: 's473',
      pName: 'Model S T-shirt ',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$11.00',
      imageURL: '../../assets/Images/ImageS7.png'
    },
    {
      id: 's474',
      pName: 'Model S T-shirt ',
      pNameURL: 'Model S T-shirt',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$11.00',
      imageURL: '../../assets/Images/ImageS8.png'
    },
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
