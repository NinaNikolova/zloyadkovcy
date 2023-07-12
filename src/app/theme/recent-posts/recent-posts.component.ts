import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { IPost } from 'src/app/shared/interfaces/post';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.scss']
})
export class RecentPostsComponent implements OnInit {
  posts: IPost[] |null = null;
  errorFetchingData=false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadPosts(5).subscribe({
      next: (value) => {
        this.posts=value;
      },
      error: (err) =>{
        this.errorFetchingData=true;
        console.error(err)
      } 
    })
  }
}
