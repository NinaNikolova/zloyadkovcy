import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from '../user.service';
import { Theme } from 'src/app/shared/interfaces/theme';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  constructor(private userService: UserService, private router: Router, private apiService: ApiService){}
  themeList: Theme[] = [];
  isLoading: boolean = true;
  get username():string{
    console.log(this.userService.user)
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
      next: (themes) => {
        this.themeList = themes;
        this.isLoading = false;
        console.log(themes)
      },
      error: (err) => {
        this.isLoading = false;
        console.error(`Error: ${err}`);
      },
    });
  }
}
