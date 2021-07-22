import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AppRoutingModule } from './/app-routing.module';
import { MyGaurds } from './app.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddCustomerComponent,
    SignInComponent,
    UserDashboardComponent,
    AdminComponent,
    NotfoundComponent,
    AddProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ViewUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule  ],
  providers: [MyGaurds,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
