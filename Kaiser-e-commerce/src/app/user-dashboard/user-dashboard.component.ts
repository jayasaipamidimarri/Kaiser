import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  userName:string=""
  productList={};
  constructor(public router:Router,private productService:ProductService) { }

  ngOnInit(): void {
    let obj = sessionStorage.getItem("name");
      if(obj!=null){
        this.userName=obj;
    this.productService.getProductList().subscribe(result=>{
    this.productList=result;
    })
      }
  
  }
  logout()
  {
    sessionStorage.removeItem("name");
    this.router.navigate(["signin"]);
  }

}
