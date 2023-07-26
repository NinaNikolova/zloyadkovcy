import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {
  constructor(private apiService: ApiService, private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute){}
userId =this.userService.user?._id;
themeId= this.activatedRoute.snapshot.params['themeId'];
 
  createRecipe(form: NgForm):void{
    if(form.invalid){
      return;
    }
    const {title, time, img, text, themeId, userId} = form.value;
    this.apiService.createPost(title, time, img, text, themeId, userId).subscribe(()=>{
      this.router.navigate(['/posts'])
    })

  }
}
