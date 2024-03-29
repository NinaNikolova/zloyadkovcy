import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NewThemeComponent } from "./new-theme/new-theme.component";
import { CurrentThemeComponent } from "./current-theme/current-theme.component";
import { AuthActivate } from "../shared/guards/auth.activate";
import { ThemeListComponent } from "../theme-list/theme-list.component";
import { EditThemeComponent } from "./edit-theme/edit-theme.component";


const routes: Routes = [
  {
    path: 'themes',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ThemeListComponent,
        data: {
          title: 'Всички рецепти'
        },
      },

     
      {
        path: 'create-theme',
        component: NewThemeComponent,
        data: {
          title: "Създай рецепта"
        },
      },
      {
        path: 'edit-theme/:themeId',
        component: EditThemeComponent,
        data: {
          title: "Коригирай рецепта"
        },
      },
      {
        path: ':themeId',
        component: CurrentThemeComponent,
        data: {
          title: "Цялата рецепта"
        },
      },
      
    ],
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
