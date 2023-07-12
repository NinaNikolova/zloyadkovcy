import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailDomains } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  showEditMode = false;
  formSubmitted = false;
  get user() {
    const { email, username } = this.authService.user!;
    return {
      email,
      username
    }
  }
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, appEmailValidator(appEmailDomains)]],
  })
  constructor(private fb: FormBuilder, private authService: AuthService) { 

    this.form.setValue(this.user)
  }
  
  toggleEditMode(): void {
    this.showEditMode = !this.showEditMode;
    if(this.showEditMode){
      this.formSubmitted=false;
    }
  }
  saveProfile(): void {
    this.formSubmitted=true;
    if (this.form.invalid) { return; }
      const{ email, username} = this.form.value;
    this.authService.user={
          email, username
    }as any;
    console.log(this.form.value)
    this.toggleEditMode();
  }
}
