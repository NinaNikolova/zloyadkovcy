import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/shared/interfaces/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.scss']
})
export class CurrentThemeComponent implements OnInit {
  theme: Theme | undefined;

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) { }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }
 


  ngOnInit(): void {
    this.fetchTheme();
  }
  id = this.activatedRoute.snapshot.params['themeId'];
  fetchTheme(): void {


    this.apiService.getTheme(this.id).subscribe((theme) => {

      this.theme = theme;

    });
  }
   get isOwner(): boolean {
    return this.userService.user?._id === this.theme?.userId;
  }

  deleteCurrentTheme() {
    this.apiService.delTheme(this.id).subscribe(
      (theme) => {
        console.log('Рецептата е изтрита');
        this.router.navigate(['/themes'])
      },
      (error) => {
        console.error('Error occurred during theme deletion:', error)
      }
    );
  }

}
