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
  MdButtonModule,
  MdChipsModule,
  MdProgressSpinnerModule,
  MdTooltipModule,
  MdTabsModule,
        MdDialogModule} from '@angular/material';
import { MaterialFormControlsComponent } from './material-form-controls/material-form-controls.component';
import { MaterialIconComponent } from './material-icon/material-icon.component';
import { MaterialButtonsComponent } from './material-buttons/material-buttons.component';
import { MaterialPopupsModelsComponent } from './material-popups-models/material-popups-models.component';
import { EditCourseComponent } from './edit-course/edit-course.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialFormControlsComponent,
    MaterialIconComponent,
    MaterialButtonsComponent,
    MaterialPopupsModelsComponent,
    EditCourseComponent
  ],
  entryComponents: [
    EditCourseComponent
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
    MdButtonModule,
    MdChipsModule,
    MdProgressSpinnerModule,
    MdTooltipModule,
    MdTabsModule,
    MdDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
