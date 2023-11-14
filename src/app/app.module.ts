import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { SumaComponent } from './suma/suma.component';
import { BotonesComponent } from './botones/botones.component';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    SumaComponent,
    BotonesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
