import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SlicePipe } from './pipes/slice.pipe';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [SlicePipe, UppercasePipe, ConfirmationDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule
  ],
  exports:[SlicePipe, UppercasePipe]
})
export class SharedModule { }
