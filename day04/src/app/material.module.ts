import { NgModule } from "@angular/core";
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule, MatIconModule,
  MatInputModule, MatFormFieldModule,
  MatDatepickerModule,
  MatToolbarModule
} from "@angular/material";

import { MatMomentDateModule } from '@angular/material-moment-adapter';

const MODULE = [
  FlexLayoutModule,
  MatToolbarModule, MatButtonModule, MatIconModule,
  MatInputModule, MatFormFieldModule,
  MatMomentDateModule, MatDatepickerModule
];

@NgModule({
  imports: MODULE,
  exports: MODULE
})
export class MaterialModule { }
