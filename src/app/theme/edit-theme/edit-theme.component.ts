import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/shared/interfaces/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-edit-theme',
  templateUrl: './edit-theme.component.html',
  styleUrls: ['./edit-theme.component.scss']
})
export class EditThemeComponent implements OnInit {
theme: Theme | undefined;
constructor(private apiService: ApiService, private router: Router, private userService: UserService, private activatedRoute:ActivatedRoute){}

get isLogged(): boolean {
  return this.userService.isLogged;
}
get isOwner(): boolean {
  return this.userService.user?._id === this.theme?.userId;
}
  ngOnInit(): void {
    // this.editCurrentTheme();
  }

  id = this.activatedRoute.snapshot.params['themeId'];
  fetchTheme(): void {


    this.apiService.getTheme(this.id).subscribe((theme) => {

      this.theme = theme;

    });


  }
}
