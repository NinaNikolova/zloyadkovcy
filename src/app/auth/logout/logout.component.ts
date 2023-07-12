import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  constructor(private router: Router, private authService: AuthService) {
   this.authService.logout().subscribe({
    next:()=>{
      
      this.router.navigate(['auth/login'])
    },
    error:()=>{

      this.router.navigate(['auth/login'])
    }
   })
  }
}
