import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ThemesComponent } from "../themes/themes.component";
import { NewThemeComponent } from "./new-theme/new-theme.component";
import { CurrentThemeComponent } from "./current-theme/current-theme.component";
import { AuthActivate } from "../shared/guards/auth.activate";


const routes: Routes = [
    {
      path: 'themes',
      children: [
        
        {
          path: '',
          pathMatch: 'full',
          component: ThemesComponent,
          data:{
            title: 'Категории'
          },
        },
        {
          path: ':themeId',
          component: CurrentThemeComponent,
          data:{
            title: "Рецептите от категорията"
          },
        },
      ],
    },
    {
      path: 'add-theme',
      component: NewThemeComponent,
      data:{
        title: 'Създаване нова тема'
      },
      canActivate: [AuthActivate],
    },
  ];
  

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }
