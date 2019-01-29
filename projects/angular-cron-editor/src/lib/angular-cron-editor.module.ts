import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AngularCronEditorComponent } from './angular-cron-editor.component';
import { TimePickerComponent } from './time-picker/time-picker.component';

@NgModule({
  declarations: [AngularCronEditorComponent, TimePickerComponent],
  imports: [CommonModule, FormsModule],
  exports: [AngularCronEditorComponent]
})
export class AngularCronEditorModule { }
