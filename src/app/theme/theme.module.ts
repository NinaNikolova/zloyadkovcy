import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { FormsModule } from '@angular/forms';
import { PostModule } from '../post/post.module';



@NgModule({
  declarations: [
    NewThemeComponent,
    CurrentThemeComponent,
    NewThemeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ThemeRoutingModule,
    PostModule
  ],
  exports:[NewThemeComponent, CurrentThemeComponent]
})
export class ThemeModule { }
