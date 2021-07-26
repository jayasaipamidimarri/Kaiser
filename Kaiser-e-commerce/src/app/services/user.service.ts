import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

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
  checkLogin(user:any):Observable<User>
  {
    console.log("service",user)
    return this.httpClient.get<User>(this.url+"?email="+user.email+"&password="+user.password);
    //console.log("service",user)
  }
}
