import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from '../user.service';
import { Theme } from 'src/app/shared/interfaces/theme';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  constructor(private userService: UserService, private router: Router, activateRoute: ActivatedRoute, private apiService: ApiService){}
  themes: Theme[] =[];
  // isLoading: boolean = true;
  get username():string{
        return this.userService.user?.username || ''
  }
  
  get email():string{
    return this.userService.user?.email || ''
  }
 
  
  get isLogged(): boolean {
    return this.userService.isLogged;
  }
  ngOnInit(): void {
    
      this.apiService.getThemes().subscribe({
      next: (ts) => {
    
    this.themes=ts.filter(t=>t.userId.email==this.email)
        console.log(this.themes)
      },
      error: (err) => {
  
        console.error(`Error: ${err}`);
      },
    });
  }
  
 
}
