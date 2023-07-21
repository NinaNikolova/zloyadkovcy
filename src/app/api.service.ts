import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import { Post } from 'src/app/shared/interfaces/post';
const apiURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  loadItems(id: string){
    return this.httpClient.get<Post>(`${apiURL}/items/${id}`)
  }

}
