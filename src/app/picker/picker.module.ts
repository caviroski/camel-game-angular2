import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { SliderComponent } from './slider/slider.component';
import { PickerComponent } from './picker.component';
import { AppComponent } from '../app.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [PickerComponent, SliderComponent],
  bootstrap: [PickerComponent],
  exports: [PickerComponent]
})

export class PickerModule { }