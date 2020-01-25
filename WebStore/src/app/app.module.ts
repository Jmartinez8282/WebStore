import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Nav2Component } from './nav2/nav2.component';
import { ModelSComponent } from './model-s/model-s.component';
import { Model3Component } from './model3/model3.component';
import { ModelXComponent } from './model-x/model-x.component';
import { ModelYComponent } from './model-y/model-y.component';
import { CyberTComponent } from './cyber-t/cyber-t.component';
import { RouterModule } from '@angular/router';
import {AccordionModule} from 'primeng/accordion';
import { TShirtsComponent } from './t-shirts/t-shirts.component';
import { CardSComponent } from './card-s/card-s.component';
import { Cardm3Component } from './cardm3/cardm3.component';
import { BootstrapModalComponent } from './bootstrap-modal/bootstrap-modal.component';
import { LogInComponent } from './log-in/log-in.component';
import { CartComponent } from './cart/cart.component';
import { CardXComponent } from './card-x/card-x.component';
import { CardYComponent } from './card-y/card-y.component';
import { CardCtComponent } from './card-ct/card-ct.component';
import { CreateAccComponent } from './create-acc/create-acc.component';
import { AccountComponent } from './account/account.component';
import { CardAccComponent } from './card-acc/card-acc.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CardComponent,
    NavComponent,
    CarouselComponent,
    Nav2Component,
    ModelSComponent,
    Model3Component,
    ModelXComponent,
    ModelYComponent,
    CyberTComponent,
    TShirtsComponent,
    CardSComponent,
    Cardm3Component,
    BootstrapModalComponent,
    LogInComponent,
    CartComponent,
    CardXComponent,
    CardYComponent,
    CardCtComponent,
    CreateAccComponent,
    AccountComponent,
    CardAccComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  
    RouterModule.forRoot([
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
