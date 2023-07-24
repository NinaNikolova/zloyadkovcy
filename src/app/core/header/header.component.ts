import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router, private userService: UserService) { }
  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
  get username(): string {
    return this.userService.user?.username || "";
  }
  logout(): void {
    this.userService.logout().subscribe({
      next: ()=>{
        this.router.navigate(['/login'])
      },
      error: ()=>{
        this.router.navigate(['/login'])
      }
    })

  }
}
