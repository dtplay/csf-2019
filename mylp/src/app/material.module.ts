import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatToolbarModule, MatButtonModule, MatIconModule,
  MatCardModule, MatFormFieldModule, MatInputModule, MatSliderModule, MatExpansionModule
} from '@angular/material';

const MODULES = [
  FlexLayoutModule,
  MatToolbarModule, MatButtonModule, MatIconModule,
  MatCardModule, MatFormFieldModule, MatInputModule,
  MatSliderModule, MatExpansionModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule { }
