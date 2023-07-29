import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../shared/interfaces/theme';
import { UserService } from '../user/user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent implements OnInit{

  themesList: Theme[] = [];
  isLoading: boolean = true;
  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
  ) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.apiService.getThemes().subscribe({
      next: (themes) => {
        this.themesList = themes;
    
      },
      error: (err) => {
  
        console.error(`Error: ${err}`);
      },
    });
  }
}
