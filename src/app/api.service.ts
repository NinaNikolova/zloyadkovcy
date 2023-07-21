import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import { IItem } from 'src/app/shared/interfaces/item';
const apiURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  loadItems(id: string){
    return this.httpClient.get<IItem>(`${apiURL}/items/${id}`)
  }

}
