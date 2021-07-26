import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  msg:string=""
  user=new User;
  user1=new User;
  constructor(public router:Router,public userService:UserService) { }

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
    // checkUser1(userRef:any)
    // {
    //   let useremail=userRef.email;
    //   let pass=userRef.pass;

    //   this.user.email=useremail;
    //   this.user.password=pass;
      
    //   this.userService.checkLogin(this.user).subscribe(obj=>{
    //     if(obj==null)
    //     {
    //       this.msg="Please Enter valid username or password"
    //     }
    //     else
    //     {
    //       this.user1=obj;
    //       console.log("comp-user1",this.user1)
    //       //sessionStorage.setItem("user",JSON.stringify(obj));
    //       sessionStorage.setItem(this.user1.email,this.user1.password);
    //       console.log("comp-user1",this.user1)
    //       console.log("comp-user",this.user)
    //       this.router.navigate(["userdashboard"])
    //     }
    //   })
    // }
}
