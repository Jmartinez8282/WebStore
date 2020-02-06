import { Component, OnInit, ViewEncapsulation, } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Iproduct } from '../interfaces/iproduct';
import { CartServices } from '../services/cart.service';
import { DataService } from '../services/data.service';
import { User } from '../interface/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class NavComponent implements OnInit {
  closeResult: string;
  cartCount = 0;
  cartItems: Iproduct[] = [];
  showList = false;
  cartTotal = 0;
  constructor(private modalService: NgbModal, private cartService: CartServices,private dService:DataService) { dService.setUserList();}

  ngOnInit() {

    this.cartService.$cartItems.subscribe(items => {

      this.cartItems = items;

    });
    this.cartService.$cartTotal.subscribe(total => {

      this.cartTotal = total;

    });
    this.cartService.$cartQuanity.subscribe(count => {

      this.cartCount = count;

    });
  }
signUp(uName:string,fName:string,lName:string,em:string,cem:string, pWord:string, cPW:string){

  if ( em === cem && pWord.length > 3){
    if (pWord === cPW)
    if(this.dService.checkIfUserExists(uName)){
      alert ('User Name already Exists');
    
    }else{
      let addThisName: User = {
        userName: uName,
        firstName: fName, 
       lastName: lName,
       email:em ,
       passWord: pWord, 
      }
      this.dService.addUser(addThisName);
    }else{
      alert('password does not match')
    }
    }else{
      alert('an unexpected erro accoured.')
    }
    
}

  logIn(userName:string,passWord:string){
    //we are going to compare password sore in our servi
    if(this.dService.checkCred(userName,passWord)){
      alert ('you are LoggedIn');
    }else{
      alert ('Try again');
    }
    }
    

  openXl(longcontent) {
    this.modalService.open(longcontent, { size: 'xl' });
  }
  openXl2(content) {
    this.modalService.open(content, { size: 'xl' });
  }
  toggleList(){
    this.showList =!this.showList;
  }
  removeFromCart(item,index){
    this.cartService.removeProduct(item,index);
  }
}
