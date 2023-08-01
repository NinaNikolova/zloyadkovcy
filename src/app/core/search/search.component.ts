import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/shared/interfaces/theme';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  themes: Theme[] = [];
  searchInput: string |any;
  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
  ) {}



  ngOnInit(): void {
    this.apiService.getThemes().subscribe({
      next: (ts) => {
        this.themes = ts;
    console.log(this.themes)
      },
      error: (err) => {
          console.error(`Error: ${err}`);
      },
    });
  }
}
