import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ThemeListComponent } from './theme/theme-list/theme-list.component';
import { RecentPostsComponent } from './theme/recent-posts/recent-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './core/home/home.component';
import { CatalogComponent } from './theme/catalog/catalog.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ThemeModule } from './theme/theme.module';
import { appInterceptorProvider } from './app.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { API_ERROR } from './shared/constants';
import { BehaviorSubject } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    CoreModule


  ],
  providers:[
    appInterceptorProvider,
    {
      provide: API_ERROR,
      useValue: new BehaviorSubject(null)
    }],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
