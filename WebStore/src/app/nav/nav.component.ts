import { Component, OnInit, ViewEncapsulation, } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Iproduct } from '../interfaces/iproduct';
import { CartServices } from '../services/cart.service';
import { DataService } from '../services/data.service';

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
  constructor(private modalService: NgbModal, private cartService: CartServices,private dService:DataService) { }

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
