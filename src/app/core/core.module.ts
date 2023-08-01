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
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../shared/pipes/search.pipe';

import { NgIf } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';





@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        PageNotFoundComponent,
        ErrorComponent,
        SearchComponent,




    ],
    exports: [HeaderComponent, FooterComponent, PageNotFoundComponent, HomeComponent],
    imports: [
        CommonModule, SharedModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        NgIf,
        RouterModule,



    ]
})
export class CoreModule { }
