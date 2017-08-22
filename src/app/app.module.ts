import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { MdCheckboxModule
        , MdRadioModule
        , MdSelectModule
        , MdInputModule
        , MdDatepickerModule
        , MdNativeDateModule
  , MdIconModule, 
        MdButtonModule} from '@angular/material';
import { MaterialFormControlsComponent } from './material-form-controls/material-form-controls.component';
import { MaterialIconComponent } from './material-icon/material-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialFormControlsComponent,
    MaterialIconComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdCheckboxModule,
    MdRadioModule,
    MdSelectModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdIconModule,
    MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
