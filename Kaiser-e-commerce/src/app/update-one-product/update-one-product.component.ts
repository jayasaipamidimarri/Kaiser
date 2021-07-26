import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update-one-product',
  templateUrl: './update-one-product.component.html',
  styleUrls: ['./update-one-product.component.css']
})
export class UpdateOneProductComponent implements OnInit {

  editProduct = new FormGroup({
    pname: new FormControl(''),
    model: new FormControl(''),
    price: new FormControl('')
  })

  constructor(private route: ActivatedRoute,private router:Router, private productService: ProductService) { }

  ngOnInit(): void {
    console.warn(this.route.snapshot.params.id)
    this.productService.getCurrentProduct(this.route.snapshot.params.id).
      subscribe((result) => {
        this.editProduct = new FormGroup({
          pname: new FormControl(result['pname']),
          model: new FormControl(result['model']),
          price: new FormControl(result['price'])
        })
      })
  }

  editProductDetails() {
    this.productService.updateCurrentProduct(this.route.snapshot.params.id,this.editProduct.value).subscribe((result)=>{console.warn("result",result)
  this.ngOnInit()
// this.router.navigate(["admindashboard/updateproduct"])
this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
this.router.navigate(["admindashboard/updateproduct"]));});
    
  }

}
