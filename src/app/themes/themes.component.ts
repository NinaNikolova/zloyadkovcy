import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent {
constructor(private userService: UserService, router: Router){}
get isLoggedIn(): boolean {
  return this.userService.isLogged;
}
}
