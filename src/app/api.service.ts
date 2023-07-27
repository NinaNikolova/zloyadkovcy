import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import { Post } from 'src/app/shared/interfaces/post'; 
import { Theme } from './shared/interfaces/theme';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
// Themes
  getTheme(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Theme>(`${apiUrl}/themes/${id}`);
  }
    // title, category, img,time,ingredients,  text, userId
  createTheme(title:string, category:string, img:string, time:number, ingredients: string, text:string, userId:string) {
    const { apiUrl } = environment;
    return this.http.post<Theme>('/api/themes', {title, category, img,time,ingredients,  text, userId});
  }

  getThemes() {
    const { apiUrl } = environment;
    return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }
// Posts
  getPosts(limit?: number) {
    const { apiUrl } = environment;
    const limitFilter = limit ? `?limit=${limit}` : '';

    return this.http.get<Post[]>(`${apiUrl}/posts${limitFilter}`);
  }

  createPost(title:string, time:number, img:string, text:string, themeId:string, userId:string) {
    const { apiUrl } = environment;
    return this.http.post<Theme>(`${apiUrl}/themes/${themeId}/posts`, {title, time, img, text, themeId, userId});
  }
}