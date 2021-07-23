import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  productList={};
  constructor(private productService:ProductService) { }

  ngOnInit():void {
    this.productService.getProductList().subscribe(result=>{
      this.productList=result;
  }


}
