import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  addUser=new FormGroup({
    fname:new FormControl(''),
    lname:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    mobile:new FormControl(''),
    address:new FormControl('')
  })

  constructor(public router:Router,private userService:UserService) { }

  ngOnInit() {
  }
  
  collectUserData()
  {
    console.log("Registration Successfull")
    this.router.navigate(["signin"])
    // console.warn(this.addUser.value)
    this.userService.saveUserData(this.addUser.value).subscribe((result)=>{
      console.warn("result is here",result)
    })
  }
  // registerUser(newUserRef:any)
  // {
  //   console.log("Registration Successfull")
  //   this.router.navigate(["signin"]);
  // }
}
