import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  msg:string=""
  constructor(public router:Router) { }

  ngOnInit() {
  }

  checkUser(userRef:any){
    let user=userRef.user;
    let pass=userRef.pass;
    if(user=="Jai" && pass=="123")
    {
      console.log("Login Successfull")
      sessionStorage.setItem("name",user);
      this.router.navigate(["home"])
    }
    else
    {
      console.log("Login Failed")
      this.msg="Username or password not found";
    }
  }

}
