import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
   alert:boolean=false;
  addProduct=new FormGroup({
    pname:new FormControl(''),
    model:new FormControl(''),
    price:new FormControl('')
  })

  constructor(private productService:ProductService) { }

  ngOnInit() {
  }
  addProductDetails()
  {
    this.productService.saveProductData(this.addProduct.value).subscribe((result)=>{
    console.warn("result is here",result,this.addProduct)
    })
    this.alert=true;
    this.addProduct.reset({})
  }
  closeAlert()
  {
    this.alert=false;
  }
}
