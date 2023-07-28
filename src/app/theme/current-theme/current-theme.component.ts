import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/shared/interfaces/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.scss']
})
export class CurrentThemeComponent implements OnInit{
  theme: Theme | undefined;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }
  get isOwner():boolean{
    return this.userService.user?._id===this.theme?.userId;
  }


  ngOnInit(): void {
    this.fetchTheme();
  }

  fetchTheme(): void {
    const id = this.activatedRoute.snapshot.params['themeId'];

    this.apiService.getTheme(id).subscribe((theme) => {
        
      this.theme = theme;
    
    });
  }
  
}
