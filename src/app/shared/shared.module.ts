import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { RouterModule } from '@angular/router';
import { SlicePipe } from './pipes/slice.pipe';
import { UppercasePipe } from './pipes/uppercase.pipe';



@NgModule({
  declarations: [LoaderComponent, SlicePipe, UppercasePipe],
  imports: [
    CommonModule, RouterModule
  ],
  exports:[LoaderComponent, SlicePipe, UppercasePipe]
})
export class SharedModule { }
