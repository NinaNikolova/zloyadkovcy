import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { FormsModule } from '@angular/forms';
import { EditThemeComponent } from './edit-theme/edit-theme.component';




@NgModule({
  declarations: [
    NewThemeComponent,
    CurrentThemeComponent,
    NewThemeComponent,
    EditThemeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ThemeRoutingModule,
  ],
  exports:[NewThemeComponent, CurrentThemeComponent]
})
export class ThemeModule { }
