import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../services/data.service';
import { Iproduct } from '../interfaces/iproduct';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-bootstrap-modal',
  templateUrl: './bootstrap-modal.component.html',
  styleUrls: ['./bootstrap-modal.component.scss']
})
export class BootstrapModalComponent implements OnInit {
  @Input()product;
  productList: Iproduct[];
  
  closeResult: string;
 
  constructor(private modalService: NgbModal,private dService:DataService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.productList = this.dService.getProducts();
    //this.getProduct()
    
  }
  //getProduct(){
    //const id = this.route.snapshot.paramMap.get('id');
    //const productName = this.route.snapshot.paramMap.get('productName');
    //this.dService.getProduct(id).subscribe(
      //item => this.product = item
    //)
  //}
  open(content) {
    
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}


