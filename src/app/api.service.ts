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
  createTheme(themeName:string) {
    const { apiUrl } = environment;
    return this.http.post<Theme>('/api/themes', {themeName});
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
    return this.http.post<Theme>('/api/posts', {title, time, img, text, themeId, userId});
  }
}