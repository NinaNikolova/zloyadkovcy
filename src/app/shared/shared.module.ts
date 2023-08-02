import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SlicePipe } from './pipes/slice.pipe';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchPipe } from './pipes/search.pipe';
import { ListPipe } from './pipes/list.pipe';
import { Search2Pipe } from './pipes/search2.pipe';





@NgModule({
  declarations: [SlicePipe, UppercasePipe, ConfirmationDialogComponent, SearchPipe, ListPipe, Search2Pipe],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule
  ],
  exports:[SlicePipe, UppercasePipe, SearchPipe, ListPipe, Search2Pipe]
})
export class SharedModule { }
