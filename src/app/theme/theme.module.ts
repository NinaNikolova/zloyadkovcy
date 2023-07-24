import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewThemeComponent,
    CurrentThemeComponent,
    NewThemeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ThemeRoutingModule
  ],
  exports:[NewThemeComponent]
})
export class ThemeModule { }
