import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Post } from 'src/app/shared/interfaces/post';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
constructor(private userService: UserService, private router: Router, private apiService: ApiService){}
postList: Post[] = [];
isLoading: boolean = true;
get username():string{
  console.log(this.userService.user)
  return this.userService.user?.username || ''
}
get email():string{
  return this.userService.user?.email || ''
}
get isLogged(): boolean {
  return this.userService.isLogged;
}

ngOnInit(): void {
  this.apiService.getPosts().subscribe({
    next: (posts) => {
      this.postList = posts;
      this.isLoading = false;
      console.log(posts)
    },
    error: (err) => {
      this.isLoading = false;
      console.error(`Error: ${err}`);
    },
  });
}

}
