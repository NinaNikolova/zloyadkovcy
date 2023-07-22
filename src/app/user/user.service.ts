import { Injectable } from '@angular/core';
import { User } from '../shared/interfaces/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    // this mean if user - true, else - false
    return !!this.user;
  }
  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || "";
      this.user = JSON.parse(lsUser)
    } catch (error) {
      this.user = undefined;
    }
  }
  login(): void {
    this.user = {
      email: 'ninagbs@abv.bg',
      username: 'Nina',
      tel: '0884127067',
      password: '123456',
      //   themes:["Основни безмесни ястия"],
      // posts:["Яйца на очи"],
      _id: "12345",

      created_at: '22072023',
      updatedAt: '22072023',
      _v: 1
    }
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))
  }
  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY)
  }
}
