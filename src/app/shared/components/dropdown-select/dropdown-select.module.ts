import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownSelectComponent } from './dropdown-select.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DropdownSelectComponent],
  exports: [
    DropdownSelectComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class DropdownSelectModule {}
