import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SlicePipe } from './pipes/slice.pipe';
import { UppercasePipe } from './pipes/uppercase.pipe';



@NgModule({
  declarations: [SlicePipe, UppercasePipe],
  imports: [
    CommonModule, RouterModule
  ],
  exports:[SlicePipe, UppercasePipe]
})
export class SharedModule { }
