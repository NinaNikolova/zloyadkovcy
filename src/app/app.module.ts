import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './core/home/home.component';

import { LoaderComponent } from './shared/loader/loader.component';
import { SharedModule } from './shared/shared.module';


import { API_ERROR } from './shared/constants';
import { BehaviorSubject } from 'rxjs';
import { PostListComponent } from './post-list/post-list.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemesComponent } from './themes/themes.component';
import { UserModule } from './user/user.module';
import { ThemeModule } from './theme/theme.module';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    ThemeListComponent,
    ThemesComponent,

  ],
  imports: [
    BrowserModule,
       CoreModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    UserModule,
    ThemeModule,
    AppRoutingModule,


  ],
  providers:[],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
