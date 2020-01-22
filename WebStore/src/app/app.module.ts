import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'model-s',component:ModelSComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
