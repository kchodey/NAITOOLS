import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from "@angular/material";
import { MdInputModule,MdButtonModule  } from '@angular/material';
import { RouterModule, Routes } from "@angular/router";
import { MdTabsModule } from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import { WfrComponent } from './components/wfr/wfr.component';
import { TortComponent } from './components/tort/tort.component';
import { UbtComponent } from './components/ubt/ubt.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { WfrsetemailComponent } from './components/wfrsetemail/wfrsetemail.component';
import { WfrresetdataComponent } from './components/wfrresetdata/wfrresetdata.component';

@NgModule({
  declarations: [
    AppComponent,
    WfrComponent,
    TortComponent,
    UbtComponent,
    HomeComponent,
    FooterComponent,
    WfrsetemailComponent,
    WfrresetdataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    MdButtonModule,
    MdInputModule,
    MdTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
