import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerSigninComponent } from './customer-signin/customer-signin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:"\home",component:HomeComponent},
{path:"",redirectTo:"\home",pathMatch:"full"},
{path:"\signin",component:CustomerSigninComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
