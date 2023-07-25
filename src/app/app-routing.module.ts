import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { PostListComponent } from './post-list/post-list.component';
import { ErrorComponent } from './core/error/error.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data:{
      title: 'Начало'
    }
  },
  
  {
    path: 'posts',
       component: PostListComponent,
    data:{
      title: 'Всички рецепти'
    }
  },
  
  {
    path: 'not-found',
    component: PageNotFoundComponent,
    data:{
      title: 'Грешка'
    },
  },
  {
    path: 'error',
    component: ErrorComponent,
    data:{
      title: 'Грешка'
    }
  },
  {
    path: '**',
    redirectTo: '/not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
