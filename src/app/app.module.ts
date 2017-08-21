import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {MdCheckboxModule} from '@angular/material';
import { MaterialFormControlsComponent } from './material-form-controls/material-form-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialFormControlsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdCheckboxModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
