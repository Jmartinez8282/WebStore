import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelSComponent } from './model-s/model-s.component';
import { TShirtsComponent } from './t-shirts/t-shirts.component';
import { Model3Component } from './model3/model3.component';
import { ModelYComponent } from './model-y/model-y.component';
import { ModelXComponent } from './model-x/model-x.component';
import { CyberTComponent } from './cyber-t/cyber-t.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { CheckOutComponent } from './check-out/check-out.component';



const routes: Routes = [
  {path:'model-s',component:ModelSComponent},
  {path:'t-shirts',component:TShirtsComponent},
  {path:'model3',component:Model3Component},
  {path:'model-x',component:ModelXComponent},
  {path:'model-y',component:ModelYComponent},
  {path:'cyber-t',component:CyberTComponent},
  {path:'cart',component:CartComponent},
  {path:'account',component:AccountComponent},
  {path:'check-out',component:CheckOutComponent},
  {
    path:'',
    redirectTo:'t-shirts',
    pathMatch:'full'
  },
  {path:'***', component:TShirtsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
