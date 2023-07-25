import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.scss']
})
export class NewThemeComponent {
  constructor(private apiService: ApiService, private router: Router){}
  createTheme(form: NgForm):void{
    if(form.invalid){
      return;
    }
    const {themeName} = form.value;
    this.apiService.createTheme(themeName).subscribe(()=>{
      this.router.navigate(['/themes'])
    })

  }
}
