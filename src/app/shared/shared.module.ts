import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { RouterModule } from '@angular/router';
import { SlicePipe } from './pipes/slice.pipe';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { TimesPipe } from './pipes/times.pipe';



@NgModule({
  declarations: [LoaderComponent, SlicePipe, UppercasePipe, TimesPipe],
  imports: [
    CommonModule, RouterModule
  ],
  exports:[LoaderComponent, SlicePipe, UppercasePipe, TimesPipe]
})
export class SharedModule { }
