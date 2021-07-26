import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  constructor(private userService:UserService) { }
  userslist:any=[];
  ngOnInit():void {
    this.userService.getuserslist().subscribe(result=>{
      //console.warn(result)
      this.userslist=result;
    })
  }

}
