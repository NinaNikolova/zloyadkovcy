import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.scss']
})
export class NewThemeComponent {
  constructor(private apiService: ApiService, private router: Router, private userService: UserService){}
  categories: string[] = ['Закуски и тестени', 'Салати', 'Супички', 'Основни с месо', 'Основни без месо', 'Десерти','Напитки'];
  
         

  createThemeHandler(form: NgForm):void{
    if(form.invalid){
      return;
    }
    const userId = this.userService.user?._id
    console.log(userId)

    // title, category, img,time,ingredients,  text,
    const {title, category, img, time,ingredients, text} = form.value;
    this.apiService.createTheme(title, category, img, time, ingredients, text, userId!).subscribe(()=>{
      this.router.navigate(['/themes'])
    })

  }
}
