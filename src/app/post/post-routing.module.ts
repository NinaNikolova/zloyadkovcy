import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ThemesComponent } from "../themes/themes.component";


import { AuthActivate } from "../shared/guards/auth.activate";
import { PostListComponent } from "../post-list/post-list.component";
import { CurrentPostComponent } from "./current-post/current-post.component";
import { NewPostComponent } from "./new-post/new-post.component";

const routes: Routes = [
    {
      path: 'posts',
      children: [
        
        {
          path: '',
          pathMatch: 'full',
          component: PostListComponent,
          data:{
            title: 'Всички рецепти'
          },
        },
        {
          path: ':postId',
          component: CurrentPostComponent,
        },
      ],
    },
    {
      path: 'add-post',
      component: NewPostComponent,
      data:{
        title: 'Създаване нова рецепта'
      },
      canActivate: [AuthActivate],
    },
  ];
  

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostRoutingModule { }
