import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { AuthActivate } from "../shared/guards/auth.activate";

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthActivate],
        data: {
            title: 'Влез',
            loginRequired: false,
        }
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthActivate],
        data: {
            title: 'Регистрирай се',
            loginRequired: false,

        }
    },
    {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [AuthActivate],
        data: {
            title: 'Излез',
            loginRequired: true
        }
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthActivate],
        data: {
            title: 'Моите рецепти',
            loginRequired: true
        }
    }
]

export const AuthRoutingModule = RouterModule.forChild(routes)