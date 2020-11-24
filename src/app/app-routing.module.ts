import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontComponent } from './front/front.component';

const routes: Routes = [
{
path:"user",
loadChildren:()=>
import("./user/user.module").then(m=> m.UserModule)
},
{
  path:"",
  component:FrontComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
