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
  private Eproducts: Iproduct[] = [
    {
      id: 's467',
      pName: 'Model 3 T-shirts',
      pNameURL: 'CyberTruck T',
      pDesc: 'Black soft Cotton t-shirt image of cyber truck broken glass',
      additionalInfo: 'image displays shatter glass of cyber truck',
      price: '$11.00',
      imageURL: "../../assets/Images/ImageS1.png"
    },
    {
      id: 's468',
      pName: 'Model 3 T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: 'Free',
      imageURL: '../../assets/Images/ImageX1.png'
    },
    {
      id: 's469',
      pName: 'Model 3 T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$1111.00',
      imageURL: '../../assets/Images/ImageX1.png'
    },
    {
      id: 's470',
      pName: 'Model 3 T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$111.00',
      imageURL: '../../assets/Images/ImageX1.png'
    },
    {
      id: 's471',
      pName: 'Model 3 T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$11.00',
      imageURL: '../../assets/Images/ImageX1.png'
    }
  ]
  
  getEProducts(): Iproduct[] {

    return this.Eproducts;
  }
  getEProduct(sku: string): Observable<Iproduct> {
    return of(
      this.Eproducts.find(
        x => x.id === sku
      ));
  }
  private Xproducts: Iproduct[] = [
    {
      id: 's467',
      pName: 'Model X T-shirts',
      pNameURL: 'CyberTruck T',
      pDesc: 'Black soft Cotton t-shirt image of cyber truck broken glass',
      additionalInfo: 'image displays shatter glass of cyber truck',
      price: '$11.00',
      imageURL: "../../assets/Images/ImageS1.png"
    },
    {
      id: 's468',
      pName: 'Model X T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: 'Free',
      imageURL: '../../assets/Images/ImageX1.png'
    },
    {
      id: 's469',
      pName: 'Model X T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$1111.00',
      imageURL: '../../assets/Images/ImageX1.png'
    },
    {
      id: 's470',
      pName: 'Model X T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$111.00',
      imageURL: '../../assets/Images/ImageX1.png'
    },
    {
      id: 's471',
      pName: 'Model X T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$11.00',
      imageURL: '../../assets/Images/ImageX1.png'
    }
  ]
  
  getXProducts(): Iproduct[] {

    return this.Xproducts;
  }
  getXProduct(sku: string): Observable<Iproduct> {
    return of(
      this.Xproducts.find(
        x => x.id === sku
      ));
  }
  private Yproducts: Iproduct[] = [
    {
      id: 's467',
      pName: 'Model Y T-shirts',
      pNameURL: 'CyberTruck T',
      pDesc: 'Black soft Cotton t-shirt image of cyber truck broken glass',
      additionalInfo: 'image displays shatter glass of cyber truck',
      price: '$11.00',
      imageURL: "../../assets/Images/ImageS1.png"
    },
    {
      id: 's468',
      pName: 'Model Y T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: 'Free',
      imageURL: '../../assets/Images/ImageX1.png'
    },
    {
      id: 's469',
      pName: 'Model Y T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$1111.00',
      imageURL: '../../assets/Images/ImageX1.png'
    },
    {
      id: 's470',
      pName: 'Model Y T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$111.00',
      imageURL: '../../assets/Images/ImageX1.png'
    },
    {
      id: 's471',
      pName: 'Model Y T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$11.00',
      imageURL: '../../assets/Images/ImageX1.png'
    }
  ]
  
  getYProducts(): Iproduct[] {

    return this.Yproducts;
  }
  getYProduct(sku: string): Observable<Iproduct> {
    return of(
      this.Yproducts.find(
        x => x.id === sku
      ));
  }
  private Cproducts: Iproduct[] = [
    {
      id: 's467',
      pName: 'Cyber Truck T-shirts',
      pNameURL: 'CyberTruck T',
      pDesc: 'Black soft Cotton t-shirt image of cyber truck broken glass',
      additionalInfo: 'image displays shatter glass of cyber truck',
      price: '$11.00',
      imageURL: "../../assets/Images/ImageS1.png"
    },
    {
      id: 's468',
      pName: 'Cybert Truck T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: 'Free',
      imageURL: '../../assets/Images/ImageX1.png'
    },
    {
      id: 's469',
      pName: 'Cyber Truck  T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$1111.00',
      imageURL: '../../assets/Images/ImageX1.png'
    },
    {
      id: 's470',
      pName: 'Cyber Truck T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$111.00',
      imageURL: '../../assets/Images/ImageX1.png'
    },
    {
      id: 's471',
      pName: 'Cyber Truck T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$11.00',
      imageURL: '../../assets/Images/ImageX1.png'
    }
  ]
  
  getCProducts(): Iproduct[] {

    return this.Cproducts;
  }
  getCProduct(sku: string): Observable<Iproduct> {
    return of(
      this.Cproducts.find(
        x => x.id === sku
      ));
  }
  private Tproducts: Iproduct[] = [
    {
      id: 's467',
      pName: 'Cyber Truck T-shirts',
      pNameURL: 'CyberTruck T',
      pDesc: 'Black soft Cotton t-shirt image of cyber truck broken glass',
      additionalInfo: 'image displays shatter glass of cyber truck',
      price: '$11.00',
      imageURL: "../../assets/Images/ImageS1.png"
    },
    {
      id: 's468',
      pName: 'Model S T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: 'Free',
      imageURL: '../../assets/Images/ImageX1.png'
    },
    {
      id: 's469',
      pName: 'Model Y  T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$1111.00',
      imageURL: '../../assets/Images/ImageX1.png'
    },
    {
      id: 's470',
      pName: 'Cyber Truck T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$111.00',
      imageURL: '../../assets/Images/ImageX1.png'
    },
    {
      id: 's471',
      pName: 'Model 3 T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$11.00',
      imageURL: '../../assets/Images/ImageX1.png'
    }
  ]
  
  getTProducts(): Iproduct[] {

    return this.Tproducts;
  }
  getTProduct(sku: string): Observable<Iproduct> {
    return of(
      this.Tproducts.find(
        x => x.id === sku
      ));
  }
}
