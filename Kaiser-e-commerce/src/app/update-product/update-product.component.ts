import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productList:any=[];
  constructor(private productService:ProductService) { }

  ngOnInit():void {
    this.productService.getProductList().subscribe(result=>{
      this.productList=result;
    })
  }
}
