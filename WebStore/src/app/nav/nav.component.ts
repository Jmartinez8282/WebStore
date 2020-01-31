import { Component, OnInit, ViewEncapsulation, } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Iproduct } from '../interfaces/iproduct';

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
  cartItems: Iproduct [] = [];
  showList = false;
  cartTotal = 0;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  openXl(longcontent) {
    this.modalService.open(longcontent, { size: 'xl' });
  }
  openXl2(content) {
    this.modalService.open(content, { size: 'xl' });
  }
  
  

  
}
