import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ThemesComponent } from "../themes/themes.component";
import { NewThemeComponent } from "./new-theme/new-theme.component";
import { CurrentThemeComponent } from "./current-theme/current-theme.component";
import { AuthActivate } from "../shared/guards/auth.activate";

const routes: Routes = [
    {
        path: 'themes',
        data: {
            title: 'Категории'
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: ThemesComponent,
            },
            {
                path: ':themeId',
                component: CurrentThemeComponent

            },
        ]
    },

    {
        path: 'new-theme',
        component: NewThemeComponent,
        data: {
            title: 'Създаване на категория'
        },
        canActivate:[AuthActivate]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }
