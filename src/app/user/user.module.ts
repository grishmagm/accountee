import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';




import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { VendorComponent } from './vendor/vendor.component';
import { ClientComponent } from './client/client.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ShowvendorComponent } from './showvendor/showvendor.component';
import { ReportComponent } from './report/report.component';
//import {BrowserAnimationModule} from '@angular/platform-browser/animations';




@NgModule({
  declarations: [DashboardComponent, RegisterComponent, LoginComponent, VendorComponent, ClientComponent, InvoiceComponent, ShowvendorComponent, ReportComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
ReactiveFormsModule,
MatSliderModule,
MatSidenavModule,
MatToolbarModule,
MatIconModule,
MatListModule,
MatButtonModule,
MatTooltipModule
//BrowserAnimationModule

  ]
})
export class UserModule { }
