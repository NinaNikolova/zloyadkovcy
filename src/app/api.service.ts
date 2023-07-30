import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

import { Theme } from './shared/interfaces/theme';
import { UserService } from './user/user.service';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private userService: UserService) { }
  // Themes
  getTheme(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Theme>(`${apiUrl}/themes/${id}`);
  }


  delTheme(id: string) {

    return this.http.delete<Theme>(`/api/themes/${id}`);
  }
  // title, category, img,time,ingredients,  text, userId
  createTheme(title: string, category: string, img: string, time: number, ingredients: string, text: string, userId: string) {
    const { apiUrl } = environment;
    return this.http.post<Theme>('/api/themes', { title, category, img, time, ingredients, text, userId });
  }

  getThemes() {
    const { apiUrl } = environment;
    return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }
  

  editTheme(id: string, title: string, category: string, img: string, time: number, ingredients: string, text: string, userId: string) {

    return this.http.put<Theme>(`/api/themes/${id}`, { title, category, img, time, ingredients, text });
  }

}