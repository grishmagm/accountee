import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { UserService } from '@angular/service/user.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrontComponent } from './front/front.component';
import { ItemComponent } from './item/item.component';
import { ShowitemComponent } from './showitem/showitem.component';
import { SaleinvoiceComponent } from './saleinvoice/saleinvoice.component';
import { ShowsaleinvoiceComponent } from './showsaleinvoice/showsaleinvoice.component';
import { PaymentInComponent } from './payment-in/payment-in.component';
import { ShowpaymentInComponent } from './showpayment-in/showpayment-in.component';
import { SalereturnComponent } from './salereturn/salereturn.component';
import { ShowsalereturnComponent } from './showsalereturn/showsalereturn.component';
import { EstimateComponent } from './estimate/estimate.component';
import { ShowestimateComponent } from './showestimate/showestimate.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontComponent,
    ItemComponent,
    ShowitemComponent,
    SaleinvoiceComponent,
    ShowsaleinvoiceComponent,
    PaymentInComponent,
    ShowpaymentInComponent,
    SalereturnComponent,
    ShowsalereturnComponent,
    EstimateComponent,
    ShowestimateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
MatIconModule,
MatListModule,
MatButtonModule,
MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
