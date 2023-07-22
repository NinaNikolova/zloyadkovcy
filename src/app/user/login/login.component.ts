import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) { }
  login(email: string, password: string): void {
    // TODO: for now we a not handling the data
    this.userService.login();
    this.router.navigate(['/'])
  }
}
