import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { CountdowntimerComponent } from './countdowntimer/countdowntimer.component';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatetimepickerModule, MatNativeDatetimeModule } from "@mat-datetimepicker/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from 'mat-input';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    CountdowntimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatetimepickerModule,
    MatNativeDatetimeModule,
    FormsModule,
    ReactiveFormsModule ,
    OwlDateTimeModule, OwlNativeDateTimeModule
    // MatInputModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en' },
    { provide: MAT_DATE_LOCALE, useValue: 'en' },
    { provide: MAT_DATE_LOCALE, useValue: 'en' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
