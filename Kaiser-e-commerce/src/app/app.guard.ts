import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class MyGaurds implements CanActivate
{
    constructor(public router:Router) { }
    
    canActivate()               //methods
    {
        let obj=sessionStorage.getItem("name");
        if(obj==null)
        {
            this.router.navigate(["signin"]);
            return false;
        }
        else
        {
            return true;
        }
        //console.log("I came here to MyGaurds")
        
    }
}