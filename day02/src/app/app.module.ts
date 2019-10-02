import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiceComponent } from './components/dice.component';
import { ControlComponent } from './components/control.component';

@NgModule({
  declarations: [
    AppComponent, DiceComponent, ControlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
