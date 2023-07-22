import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppModule } from '../app.module';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ErrorComponent } from './error/error.component';




@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        PageNotFoundComponent,
        ErrorComponent
    ],
    exports: [HeaderComponent, FooterComponent, PageNotFoundComponent, HomeComponent],
    imports: [
        CommonModule, SharedModule, RouterModule, 
    ]
})
export class CoreModule { }
