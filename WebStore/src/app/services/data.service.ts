import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { Observable, of } from 'rxjs';
import { User } from '../interface/user';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  userList: User[] = [
    {
      userName:'jateen',
      passWord:'JaTeam'
    }
  ];
  
  private products: Iproduct[] = [
    {
      id: 's467',
      pName: 'Model S T-shirt',
      pNameURL: 'Model S T-shirt',
      pDesc: 'Black soft Cotton t-shirt image of model s in development stages',
      additionalInfo: 'Black model s tesla t-shirt prined in front',
      price: '11.00',
      imageURL: "../../assets/Images/ImageS1.png",
      quantity: 0
    },
    {
      id: 's468',
      pName: 'Model S T-shirt',
      pNameURL: 'Model S T-shirt',
      pDesc: 'Grey soft cotton t-shirt',
      additionalInfo: 'Image of blue tesla model s',
      price: '9.00',
      imageURL: '../../assets/Images/ImageS2.png',
      quantity: 0
    },
    {
      id: 's469',
      pName: 'Model S T-shirt',
      pNameURL: 'Model S T-shirt',
      pDesc: 'fresh model S cotton T-shirt',
      additionalInfo: 'Tesla model S haha, gas t-shirt',
      price: '10.00',
      imageURL: '../../assets/Images/ImageS4.png',
      quantity: 0
    },
    {
      id: 's470',
      pName: 'Model S T-shirt',
      pNameURL: 'Model S T-shirt',
      pDesc: 'black soft cotton t-shirt',
      additionalInfo: 'Black t-shirt with white image of tesla model s',
      price: '12.00',
      imageURL: '../../assets/Images/ImageS4.png',
      quantity: 0
    },
    {
      id: 's471',
      pName: 'Model S T-shirt ',
      pNameURL: 'Model S T-shirt',
      pDesc: 'White soft Cotton t-shirt',
      additionalInfo: 'image of model s in development stages printed in front',
      price: '11.00',
      imageURL: '../../assets/Images/ImageS5.png',
      quantity: 0
    },
    {
      id: 's472',
      pName: 'Model S T-shirt ',
      pNameURL: 'Model S T-shirt',
      pDesc: 'White on White T-shirt',
      additionalInfo: 'White cotton T-shirt with with white tesla model s image in front',
      price: '11.00',
      imageURL: '../../assets/Images/ImageS6.png',
      quantity: 0
    },
    {
      id: 's473',
      pName: 'Model S T-shirt ',
      pNameURL: 'Gray Model S T-shirt',
      pDesc: 'Dark gray model s car image printed in front',
      additionalInfo: 'soft cotton t-shirt',
      price: '11.00',
      imageURL: '../../assets/Images/ImageS7.png',
      quantity: 0
    },
    {
      id: 's474',
      pName: 'Model S T-shirt ',
      pNameURL: 'Model S T-shirt',
      pDesc: 'Black Model S P100D T-shirt',
      additionalInfo: 'Tesla Model s P100D can go 0-60 in 2.9 sec',
      price: '11.00',
      imageURL: '../../assets/Images/ImageS8.png',
      quantity: 0
    },
  ]
  constructor() { }
  checkCred(userName: string,passWord: string):boolean{
    let result = false;
    if(userName === this.userList[0].userName){
    if(passWord === this.userList[0].passWord){
      result = true;
    }
    }
        return result;
      }



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
      pNameURL: 'Model 3 Tshirt',
      pDesc: 'Grey cotton Tesla Model 3 Shirt',
      additionalInfo: 'image displays blue model 3 with red "My other car is a reservation"',
      price: '11.00',
      imageURL: "../../assets/Images/ImageM3-1.png",
      quantity: 0
    },
    {
      id: 's468',
      pName: 'Model 3 T-shirts',
      pNameURL: 'Tesla black model 3  ',
      pDesc: 'Black soft cotton t-shirt image of the number 3 in grey',
      additionalInfo: '',
      price: '12.00',
      imageURL: '../../assets/Images/ImageM3-3.png',
      quantity: 0
    },
    {
      id: 's469',
      pName: 'Model 3 T-shirts',
      pNameURL: 'Model 3 T-shirts',
      pDesc: 'Black Tesla soft cotton model 3 t-shirt thre stripes',
      additionalInfo: 'Black shirt with black tesla model 3 image three strips logo',
      price: '14.00',
      imageURL: '../../assets/Images/ImageM3-4.png',
      quantity: 0
    },
    {
      id: 's470',
      pName: 'Model 3 T-shirts',
      pNameURL: 'Model 3 T-shirts',
      pDesc: 'White soft cotton white T-shirt',
      additionalInfo: 'White T-shirt with black model 3 outline',
      price: '$15.00',
      imageURL: '../../assets/Images/ImageM3-5.png',
      quantity: 0
    },
    {
      id: 's471',
      pName: 'Model 3 T-shirts',
      pNameURL: 'Model 3 T-shirt',
      pDesc: 'Tesla dark grey soft cotton t-shirt',
      additionalInfo: 'grey t-shirt "The Future is here" front logo ',
      price: '11.00',
      imageURL: '../../assets/Images/ImageM3-6.png',
      quantity: 0
    },
    {
      id: 's471',
      pName: 'Model 3 T-shirts',
      pNameURL: 'Model 3 T-shirts',
      pDesc: 'White soft cotton Model 3 T-shirt',
      additionalInfo: 'White T-shirt with black outline model 3 dog in frunk image',
      price: '$11.00',
      imageURL: '../../assets/Images/ImageM3-7.png',
      quantity: 0
    },
    {
      id: 's471',
      pName: 'Model 3 T-shirts',
      pNameURL: 'Model 3 T-shirts',
      pDesc: 'Tesla Model 3 blue soft cotton T-shirt',
      additionalInfo: 'Blue model 3 t-shirt with white tesla model 3',
      price: '$11.00',
      imageURL: '../../assets/Images/ImageM3-8.png',
      quantity: 0
    },
    {
      id: 's471',
      pName: 'Model 3 T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$11.00',
      imageURL: '../../assets/Images/ImageM3-dark.png',
      quantity: 0
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
      pNameURL: 'Tesla Model X T-shirt',
      pDesc: 'Black soft cotton  Model X T-shirt',
      additionalInfo: 'image displays white Tesla Model X with falcon wings open "haha gas"',
      price: '11.00',
      imageURL: "../../assets/Images/ImageX1.png",
      quantity: 0
    },
    {
      id: 's468',
      pName: 'Model X T-shirts',
      pNameURL: 'Model X T-shirts',
      pDesc: 'black soft cotton t-shirt',
      additionalInfo: 'Model X t-shirt old man',
      price: '10.00',
      imageURL: '../../assets/Images/ImageX2.png',
      quantity: 0
    },
    {
      id: 's469',
      pName: 'Model X T-shirts',
      pNameURL: 'Model X T-shirts',
      pDesc: 'Tesla Model X T-shirt with Red X behind Model X',
      additionalInfo: '',
      price: '11.00',
      imageURL: '../../assets/Images/ImageX3.png',
      quantity: 0
    },
    {
      id: 's470',
      pName: 'Model X T-shirts',
      pNameURL: 'Model X T-shirts',
      pDesc: 'black soft cotton',
      additionalInfo: 'They can cause a paper cut',
      price: '$111.00',
      imageURL: '../../assets/Images/ImageX4.png',
      quantity: 0
    },
    {
      id: 's471',
      pName: 'Model X T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$11.00',
      imageURL: '../../assets/Images/ImageX5.png',
      quantity: 0
    },
    {
      id: 's471',
      pName: 'Model X T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$11.00',
      imageURL: '../../assets/Images/ImageX6.png',
      quantity: 0
    },
    {
      id: 's471',
      pName: 'Model X T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$11.00',
      imageURL: '../../assets/Images/ImageX7.png',
      quantity: 0
    },
    {
      id: 's471',
      pName: 'Model X T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$11.00',
      imageURL: '../../assets/Images/ImageX8.png',
      quantity: 0
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
      imageURL: "../../assets/Images/ImageY1.png",
      quantity: 0
    },
    {
      id: 's468',
      pName: 'Model Y T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: 'Free',
      imageURL: '../../assets/Images/ImageY2.png',
      quantity: 0
    },
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
      imageURL: "../../assets/Images/cyberShirt.png",
      quantity: 0
    },
    {
      id: 's468',
      pName: 'Cybert Truck T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: 'Free',
      imageURL: '../../assets/Images/cyberShirt2.png',
      quantity: 0
    },
    {
      id: 's469',
      pName: 'Cyber Truck  T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$1111.00',
      imageURL: '../../assets/Images/cyberShirt3.png',
      quantity: 0
    },
    {
      id: 's470',
      pName: 'Cyber Truck T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$111.00',
      imageURL: '../../assets/Images/cyberShirt4.png',
      quantity: 0
    },
    {
      id: 's471',
      pName: 'Cyber Truck T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$11.00',
      imageURL: '../../assets/Images/cyberShirt5.png',
      quantity: 0
    },
    {
      id: 's471',
      pName: 'Cyber Truck T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$11.00',
      imageURL: '../../assets/Images/cyberShirt6.png',
      quantity: 0
    },
    {
      id: 's471',
      pName: 'Cyber Truck T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$11.00',
      imageURL: '../../assets/Images/cyberShirt7.png',
      quantity: 0
    },
    {
      id: 's471',
      pName: 'Cyber Truck T-shirts',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '$11.00',
      imageURL: '../../assets/Images/cyberShirt8.png',
      quantity: 0
    },
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
      pName: 'Tesla Model Y T-shirts',
      pNameURL: 'Tesla Model Y',
      pDesc: 'Black soft Cotton t-shirt image of tesla model Y',
      additionalInfo: '',
      price: '$11.00',
      imageURL: "../../assets/Images/ImageS1.png",
      quantity: 0
    },
    {
      id: 's468',
      pName: 'Model X T-shirts',
      pNameURL: 'Model X black soft cotton t-shirt',
      pDesc: 'haha, gas Tesla Model X with falcon wings open.',
      additionalInfo: 'black t-shirt with Tesla model x in white printed in frng',
      price: 'Free',
      imageURL: '../../assets/Images/ImageX1.png',
      quantity: 0
    },
    {
      id: 's469',
      pName: 'Model Y  T-shirts',
      pNameURL: 'Grey cotton t-shirt ',
      pDesc: 'my other car is a reservasion with model y in front',
      additionalInfo: '',
      price: '$11.00',
      imageURL: '../../assets/Images/ImageM3-1.png',
      quantity: 0
    },
    {
      id: 's470',
      pName: 'Cyber Truck T-shirts',
      pNameURL: 'black cotton cyber truck t-shirt',
      pDesc: 'tesla cyber truck t-shirt featuring broken glass image ',
      additionalInfo: 'They can cause a paper cut',
      price: '$11.00',
      imageURL: '../../assets/Images/cyberShirt.png',
      quantity: 0
    },

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
