import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports:[]
})
export class SharedModule { }
