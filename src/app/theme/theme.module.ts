import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { SharedModule } from '../shared/shared.module';
import { ThemeRoutingModule } from './theme-routing.module';
import { CreateComponent } from './create/create.component';
import { ThemeDetailComponent } from './theme-detail/theme-detail.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { CatalogComponent } from './catalog/catalog.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ThemeListComponent, CreateComponent, ThemeDetailComponent, RecentPostsComponent, CatalogComponent, MainComponent],
  imports: [
    CommonModule,
    SharedModule,
    ThemeRoutingModule,
    FormsModule
  ],
  exports: [ThemeListComponent, RecentPostsComponent, CatalogComponent]
})
export class ThemeModule { }
