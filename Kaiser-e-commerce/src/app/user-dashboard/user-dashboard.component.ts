import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  userName:string=""
  constructor(public router:Router) { }

  ngOnInit() {
    let obj = sessionStorage.getItem("name");
      if(obj!=null){
        this.userName=obj;
      }
  }
  logout()
  {
    sessionStorage.removeItem("name");
    this.router.navigate(["signin"]);
  }

}
