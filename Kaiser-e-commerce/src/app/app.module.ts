import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AppRoutingModule } from './/app-routing.module';
import { MyGaurds } from './app.guard';
import { FormsModule } from '@angular/forms';
import { AComponent } from './a/a.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddCustomerComponent,
    SignInComponent,
    AComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [MyGaurds],
  bootstrap: [AppComponent]
})
export class AppModule { }
