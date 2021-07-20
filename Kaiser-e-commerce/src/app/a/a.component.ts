import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
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
