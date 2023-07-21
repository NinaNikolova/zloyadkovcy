import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
    {
      path: 'login',
       component: LoginComponent,
      data:{
        title: 'Влез в профила си'
      }
    },
    {
      path: 'register',
     
      component: RegisterComponent,
      data:{
        title: 'Регистрирай се'
      }
    },
    {
        path: 'profile',
       
        component: ProfileComponent,
        data:{
          title: 'Твоят профил'
        }
      },
   
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule { }
  