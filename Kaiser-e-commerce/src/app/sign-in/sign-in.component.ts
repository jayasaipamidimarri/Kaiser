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

  ngOnInit(): void {
  }

  checkUser(userRef:any)
  {
    let email=userRef.email;
    let pass=userRef.pass;
    if(email=="jayasaipamidimarri@gmail.com" && pass=="123")
    {
      console.log("Login Successfull")
      console.log(email)
      sessionStorage.setItem("name",email);
      this.router.navigate(["userdashboard"])
    }
    else if(email=="admin" && pass=="admin")
    {
      console.log("Login Successfull")
      console.log(email)
      sessionStorage.setItem("name",email);
      this.router.navigate(["admindashboard"])
    }
    else
    {
      console.log("Login Failed")
      this.msg="Username or password not found";
    }
  }
}
