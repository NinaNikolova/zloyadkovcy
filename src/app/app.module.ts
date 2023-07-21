import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './core/home/home.component';

import { LoaderComponent } from './shared/loader/loader.component';
import { SharedModule } from './shared/shared.module';

import { appInterceptorProvider } from './app.interceptor';

import { API_ERROR } from './shared/constants';
import { BehaviorSubject } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,

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
