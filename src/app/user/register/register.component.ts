import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { matchPassValidator } from 'src/app/shared/validators/match-passwords-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.minLength(10)]],

    passGroup: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePass: ['', [Validators.required]]
    },
      {
        validators: [matchPassValidator('password', 'rePass')]
      })
  })
  constructor(private fb: FormBuilder) { }

  register(): void {
    if(this.form.invalid){
      return;
    }
  }
}
