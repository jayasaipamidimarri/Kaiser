import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminComponent } from './admin/admin.component';
import { MyGaurds } from './app.guard';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UpdateOneProductComponent } from './update-one-product/update-one-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ViewUsersComponent } from './view-users/view-users.component';

const routes: Routes = [{path:"home",component:HomeComponent},

{path:"signin",component:SignInComponent},
{path:"add-customer",component:AddCustomerComponent},
{path:"userdashboard",component:UserDashboardComponent,canActivate:[MyGaurds]},
{path:"admindashboard",component:AdminComponent,canActivate:[MyGaurds],
  children:[{path:'',redirectTo: 'userdashboard',pathMatch:'full'},
  {path:"userdashboard",component:UserDashboardComponent},
            {path:"addproduct",component:AddProductComponent},
            {path:"updateproduct",component:UpdateProductComponent,
                  children:[{path:"updateoneproduct/:id",component:UpdateOneProductComponent}]},
            {path:"deleteproduct",component:DeleteProductComponent},
            {path:"view-all-users",component:ViewUsersComponent}]},
{path:"",redirectTo:"home",pathMatch:"full"},
{path:"**",component:SignInComponent}]; 

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
