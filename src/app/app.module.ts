import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { AppComponent } from './app.component';
import { CritterComponent } from './critter/critter.component';
import { SelectorComponent } from './selector/selector.component';
import { DatetimePickerComponent } from './datetime-picker/datetime-picker.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CritterComponent },
    ]),
    NgbModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  declarations: [ 
    AppComponent, 
    CritterComponent, SelectorComponent, DatetimePickerComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
