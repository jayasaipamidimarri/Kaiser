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

  saveProductData(data)
  {
    return this.httpClient.post(this.url,data)
  }

  deleteProductData(id)
  {
    return this.httpClient.delete(`${this.url}/${id}`)
  }

  getCurrentProduct(id)
  {
    return this.httpClient.get(`${this.url}/${id}`)
  }

  updateCurrentProduct(id,data)
  {
    return this.httpClient.put(`${this.url}/${id}`,data)
  }
}
