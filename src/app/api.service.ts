import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import { ITheme } from 'src/app/shared/interfaces/theme';
import { IPost } from 'src/app/shared/interfaces/post';
const apiURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  loadThemes(){
    return this.httpClient.get<ITheme[]>(`${apiURL}/themes`)
  }
  loadTheme(id: string){
    return this.httpClient.get<ITheme>(`${apiURL}/themes/${id}`)
  }
  loadPosts(limit?:number){
    return this.httpClient.get<IPost[]>(`${apiURL}/posts${limit ? `?limit=${limit}` :'' }`)
  }
}
