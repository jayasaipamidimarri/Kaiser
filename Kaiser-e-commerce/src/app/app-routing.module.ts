import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AComponent } from './a/a.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [{path:"\home",component:HomeComponent},
{path:"",redirectTo:"\home",pathMatch:"full"},
{path:"\signin",component:SignInComponent},
{path:"\add-customer",component:AddCustomerComponent},
{path:"\a",component:AComponent}]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
