import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "src/app/user/user.service";

@Injectable({providedIn: 'root'})
export class AuthActivate implements CanActivate{
    constructor(private userService: UserService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |any  {
        console.log('CanActivate called');
        let isLoggedIn = this.userService.isLogged;
        if(isLoggedIn){
            return true;
        }else{
            this.router.navigate(['/login']);
        }
    }
}