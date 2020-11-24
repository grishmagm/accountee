import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';
import { VendorComponent } from './vendor/vendor.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ShowvendorComponent } from './showvendor/showvendor.component';
import { ReportComponent } from './report/report.component';
import { ItemComponent } from '../item/item.component';
import { ShowitemComponent } from '../showitem/showitem.component';
import { SaleinvoiceComponent } from '../saleinvoice/saleinvoice.component';
import { ShowsaleinvoiceComponent } from '../showsaleinvoice/showsaleinvoice.component';
import { PaymentInComponent } from '../payment-in/payment-in.component';
import { ShowpaymentInComponent } from '../showpayment-in/showpayment-in.component';
import { SalereturnComponent } from '../salereturn/salereturn.component';
import { ShowsalereturnComponent } from '../showsalereturn/showsalereturn.component';
import { EstimateComponent } from '../estimate/estimate.component';
import { ShowestimateComponent } from '../showestimate/showestimate.component';

const routes: Routes = [
{
path:"dashboard",
component:DashboardComponent
},
{
path:"register",
component:RegisterComponent
},
{
path:"login",
component:LoginComponent
},
{
  path:"client",
  component:ClientComponent
  },
  {
    path:"vendor",
    component:VendorComponent
    },
    {
      path:"invoice",
      component:InvoiceComponent
      },
      {
        path:"showvendor",
        component:ShowvendorComponent
        },
        {
          path:"report",
          component:ReportComponent
          },
          {
            path:"item",
            component:ItemComponent
            },
            {
              path:"showitem",
              component:ShowitemComponent
              },
              {
                path:"saleinvoice",
                component:SaleinvoiceComponent
                },
                {
                  path:"showsaleinvoice",
                  component:ShowsaleinvoiceComponent
                  },
                  {
                    path:"paymentin",
                    component:PaymentInComponent
                    },
                    {
                      path:"showpaymentin",
                      component:ShowpaymentInComponent
                      },
                      {
                        path:"salereturn",
                        component:SalereturnComponent
                        },
                        {
                          path:"showsalereturn",
                          component:ShowsalereturnComponent
                          },
                          {
                            path:"estimate",
                            component:EstimateComponent
                            },
                            {
                              path:"showestimate",
                              component:ShowestimateComponent
                              }


      
    
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
