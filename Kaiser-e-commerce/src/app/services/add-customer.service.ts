import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AddCustomerService {

  constructor(public httpClient:HttpClient) { }

  // addCustomerDetails(newUserRef:any):Observable<string>{
  //   return this.httpClient.post("")
  // }
}