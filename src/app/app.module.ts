import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './core/home/home.component';
import { SharedModule } from './shared/shared.module';
import { API_ERROR } from './shared/constants';
import { BehaviorSubject } from 'rxjs';
import { ThemeListComponent } from './theme-list/theme-list.component';

import { UserModule } from './user/user.module';
import { ThemeModule } from './theme/theme.module';
import { appInterceptorProvider } from './app-interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';




@NgModule({
  declarations: [
    AppComponent,
    ThemeListComponent,
    AuthenticateComponent,

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
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
