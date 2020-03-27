import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CritterComponent } from './critter/critter.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CritterComponent },
    ])
  ],
  declarations: [ 
    AppComponent, 
    CritterComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
