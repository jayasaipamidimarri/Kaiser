import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  url="http://localhost:3000/users"
  constructor(private httpClient:HttpClient) { }
  getuserslist()
  {
    //console.warn("some data");
    return this.httpClient.get(this.url);
  }

  saveUserData(data)
  {
    //console.warn("service",data)
    return this.httpClient.post(this.url,data)
  }
}
