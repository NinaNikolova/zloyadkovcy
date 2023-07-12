import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailDomains } from 'src/app/shared/constants';
import { appEmailValidator, sameValueGroupValidator } from 'src/app/shared/validators';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, appEmailValidator(appEmailDomains)]],
    pass: this.fb.group({
      password: ['',[ Validators.required, Validators.minLength(4)]],
      repass: []
    },{
      validators:[sameValueGroupValidator('password', 'repass')]
    })
  })
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }
  registerHandler(){
    if(this.form.invalid){return;}
    const {email, username, pass: {password, repass}={}}=this.form.value;
 
    this.authService.register(email!, username!, password!, repass!).subscribe(user=> {
      
      this.router.navigate(['/theme/catalog'])
      
    })
  }
}
