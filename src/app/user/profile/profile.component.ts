import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from '../user.service';
import { Theme } from 'src/app/shared/interfaces/theme';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent{
  constructor(private userService: UserService, private router: Router, activateRoute: ActivatedRoute){}
  // themeList: Theme[] = [];
  // isLoading: boolean = true;
  get username():string{
    
    return this.userService.user?.username || ''
  }
  get themes():Theme[] | any{
        return this.userService.user?.themes || ''
        
  }
  
  get email():string{
    return this.userService.user?.email || ''
  }
  get isLogged(): boolean {
    return this.userService.isLogged;
  }
 
  
 
}
