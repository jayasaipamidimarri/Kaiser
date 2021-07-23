import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  url="http://localhost:3000/products"
  constructor(private httpClient:HttpClient) { }
  getProductList()
  {
    return this.httpClient.get(this.url);
  }
}
