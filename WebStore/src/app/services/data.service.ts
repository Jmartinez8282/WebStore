import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { Observable, of } from 'rxjs';
import { User } from '../interface/user';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  userList: User[] = [];
  
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
  checkCred(userName: string, passWord: string): boolean {
    let result = false;
    if (userName === this.userList[0].userName) {
      if (passWord === this.userList[0].passWord) {
        result = true;
      }
    }
    return result;
  }
      checkIfUserExists(userName:string):boolean{
        let result = false;
        
        if (this.userList.find(x => userName.toLowerCase() === x.userName) !== undefined){
        result = true;
        }
        return result;
        }
        addUser(userAccount:User){
          this.userList.push(userAccount);
          localStorage.setItem('user',JSON.stringify(this.userList));
           console.log(userAccount);
        }
        setUserList(){
          if(JSON.parse(localStorage.getItem('user')))
          this.userList = JSON.parse(localStorage.getItem('user'));
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
  getItems(id: string):Observable<Iproduct>{
    return of (
    (this.products.find(
      products => products.id === id
    )
    ));
  }

  private Eproducts: Iproduct[] = [
    {
      id: 'e467',
      pName: 'Model 3 T-shirts',
      pNameURL: 'Model 3 Tshirt',
      pDesc: 'Grey Cotton Model 3 T-shirt',
      additionalInfo: 'image displays shatter glass of cyber truck',
      price: '11.00',
      imageURL: "../../assets/Images/ImageM3-1.png",
      quantity: 0
    },
    {
      id: 'e468',
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
      id: 'e470',
      pName: 'Model 3 T-shirts',
      pNameURL: 'Model 3 T-shirts',
      pDesc: 'White soft cotton white T-shirt',
      additionalInfo: 'White T-shirt with black model 3 outline',
      price: '15.00',
      imageURL: '../../assets/Images/ImageM3-5.png',
      quantity: 0
    },
    {
      id: 'e471',
      pName: 'Model 3 T-shirts',
      pNameURL: 'Model 3 T-shirt',
      pDesc: 'Tesla dark grey soft cotton t-shirt',
      additionalInfo: 'grey t-shirt "The Future is here" front logo ',
      price: '11.00',
      imageURL: '../../assets/Images/ImageM3-6.png',
      quantity: 0
    },
    {
      id: 'e471',
      pName: 'Model 3 T-shirts',
      pNameURL: 'Model 3 T-shirts',
      pDesc: 'White soft cotton Model 3 T-shirt',
      additionalInfo: 'White T-shirt with black outline model 3 dog in frunk image',
      price: '11.00',
      imageURL: '../../assets/Images/ImageM3-7.png',
      quantity: 0
    },
    {
      id: 'e471',
      pName: 'Model 3 T-shirts',
      pNameURL: 'Model 3 T-shirts',
      pDesc: 'Tesla Model 3 blue soft cotton T-shirt',
      additionalInfo: 'Blue model 3 t-shirt with white tesla model 3',
      price: '11.00',
      imageURL: '../../assets/Images/ImageM3-8.png',
      quantity: 0
    },
    {
      id: 'e471',
      pName: 'Model 3 T-shirts',
      pNameURL: 'Model 3 T-shirts',
      pDesc: 'Black soft cotton Model 3 T-shirt',
      additionalInfo: 'Image of telsa model 3',
      price: '11.00',
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
      id: 'x467',
      pName: 'Model X T-shirts',
      pNameURL: 'Tesla Model X T-shirt',
      pDesc: 'Black soft cotton  Model X T-shirt',
      additionalInfo: 'image displays white Tesla Model X with falcon wings open "haha gas"',
      price: '11.00',
      imageURL: "../../assets/Images/ImageX1.png",
      quantity: 0
    },
    {
      id: 'x468',
      pName: 'Model X T-shirts',
      pNameURL: 'Model X T-shirts',
      pDesc: 'black soft cotton t-shirt',
      additionalInfo: 'Model X t-shirt old man',
      price: '10.00',
      imageURL: '../../assets/Images/ImageX2.png',
      quantity: 0
    },
    {
      id: 'x469',
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
      pDesc: 'black soft cotton model x t-shirt',
      additionalInfo: 'Image of the tesla model X with falcon wings open',
      price: '11.00',
      imageURL: '../../assets/Images/ImageX4.png',
      quantity: 0
    },
    {
      id: 'x471',
      pName: 'Model X T-shirts',
      pNameURL: 'Model X T-shirts',
      pDesc: 'light Grey Tesla Model X T-shirt',
      additionalInfo: 'light grey soft cotton telsa model x t-shirt',
      price: '11.00',
      imageURL: '../../assets/Images/ImageX5.png',
      quantity: 0
    },
    {
      id: 's471',
      pName: 'Model X T-shirts',
      pNameURL: 'Model X T-shirts',
      pDesc: 'Green Tesla Model X T-shirt',
      additionalInfo: 'Green soft cotton white tesla image in front',
      price: '11.00',
      imageURL: '../../assets/Images/ImageX6.png',
      quantity: 0
    },
    {
      id: 'x471',
      pName: 'Model X T-shirts',
      pNameURL: 'Model X T-shirts',
      pDesc: 'Tesla model X dark grey t-shirt',
      additionalInfo: 'Tesla Model X one falcon wing open image',
      price: '11.00',
      imageURL: '../../assets/Images/ImageX7.png',
      quantity: 0
    },
    {
      id: 'x471',
      pName: 'Model X T-shirts',
      pNameURL: 'Tesla Model X T-shirt',
      pDesc: 'Black tesla Model X with white ouline image',
      additionalInfo: 'Black soft cotton Model X falcon wings open',
      price: '11.00',
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
      id: 'y467',
      pName: 'Model Y T-shirts',
      pNameURL: 'Model Y T-shirt',
      pDesc: 'Black Model Y t-shirt with five diffrent sides images ',
      additionalInfo: 'Image of Model Y from four diffrent angles',
      price: '11.00',
      imageURL: "../../assets/Images/ImageY1.png",
      quantity: 0
    },
    {
      id: 'y468',
      pName: 'Model Y T-shirts',
      pNameURL: 'Model Y T-shirt',
      pDesc: 'Model Y Nikola Tesla arms in the air image',
      additionalInfo: 'black soft cotton t-shirt with nikola image in front',
      price: '12.00',
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
      id: 't467',
      pName: 'Cyber Truck T-shirts',
      pNameURL: 'CyberTruck T',
      pDesc: 'Black soft Cotton t-shirt image of cyber truck broken glass',
      additionalInfo: 'image displays shatter glass of cyber truck',
      price: '11.00',
      imageURL: "../../assets/Images/cyberShirt.png",
      quantity: 0
    },
    {
      id: 't468',
      pName: 'Cybert Truck T-shirts',
      pNameURL: 'Cyber Truck T-shirts',
      pDesc: 'Black cyber truck t-shirt',
      additionalInfo: 'Black soft cotton cyber truck t-shirt with image in front',
      price: '15.00',
      imageURL: '../../assets/Images/cyberShirt2.png',
      quantity: 0
    },
    {
      id: 't469',
      pName: 'Cyber Truck  T-shirts',
      pNameURL: 'Cyber Truck T-shirts',
      pDesc: 'Black Cyber truck T-shirt',
      additionalInfo: 'Image of cybertruck in graffiti',
      price: '11.00',
      imageURL: '../../assets/Images/cyberShirt3.png',
      quantity: 0
    },
    {
      id: 't470',
      pName: 'Cyber Truck T-shirts',
      pNameURL: 'Cyber Truck T-shirt',
      pDesc: 'White soft cotton Cyber Truck t-shirt',
      additionalInfo: 'image of baby yoda on a mini cyber truck',
      price: '18.00',
      imageURL: '../../assets/Images/cyberShirt4.png',
      quantity: 0
    },
    {
      id: 't471',
      pName: 'Cyber Truck T-shirts',
      pNameURL: 'Cyber Truck T-shirt',
      pDesc: 'Navy blue cyber truck t-shirt',
      additionalInfo: 'cyber truck graffiti and grey cyber truck image in front',
      price: '11.00',
      imageURL: '../../assets/Images/cyberShirt5.png',
      quantity: 0
    },
    {
      id: 't471',
      pName: 'Cyber Truck T-shirts',
      pNameURL: 'Cyber Truck T-shirt',
      pDesc: 'Black cyber truck t-shirt graffiti in white',
      additionalInfo: 'image of cyber truck three diffirent views',
      price: '11.00',
      imageURL: '../../assets/Images/cyberShirt6.png',
      quantity: 0
    },
    {
      id: 't471',
      pName: 'Cyber Truck T-shirts',
      pNameURL: 'Cyber Truck T-shirt',
      pDesc: 'Black soft cotton cyber truck back to the future t-shirt',
      additionalInfo: 'image of back to the future',
      price: '11.00',
      imageURL: '../../assets/Images/cyberShirt7.png',
      quantity: 0
    },
    {
      id: 't471',
      pName: 'Cyber Truck T-shirts',
      pNameURL: 'Cyber Truck T-shirt',
      pDesc: 'image of baby Yoday in mini cyber-truck',
      additionalInfo: 'White soft cotton Cyter truck T-shirt',
      price: '11.00',
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
      id: 'y467',
      pName: 'Tesla Model Y T-shirts',
      pNameURL: 'Tesla Model Y',
      pDesc: 'Black soft Cotton t-shirt image of tesla model Y',
      additionalInfo: '',
      price: '11.00',
      imageURL: "../../assets/Images/ImageS1.png",
      quantity: 0
    },
    {
      id: 'x468',
      pName: 'Model X T-shirts',
      pNameURL: 'Model X black soft cotton t-shirt',
      pDesc: 'haha, gas Tesla Model X with falcon wings open.',
      additionalInfo: 'black t-shirt with Tesla model x in white printed in frng',
      price: '11.00',
      imageURL: '../../assets/Images/ImageX1.png',
      quantity: 0
    },
    {
      id: 'y469',
      pName: 'Model Y  T-shirts',
      pNameURL: 'Grey cotton t-shirt ',
      pDesc: 'my other car is a reservasion with model y in front',
      additionalInfo: '',
      price: '11.00',
      imageURL: '../../assets/Images/ImageM3-1.png',
      quantity: 0
    },
    {
      id: 't470',
      pName: 'Cyber Truck T-shirts',
      pNameURL: 'black cotton cyber truck t-shirt',
      pDesc: 'tesla cyber truck t-shirt featuring broken glass image ',
      additionalInfo: 'They can cause a paper cut',
      price: '11.00',
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
