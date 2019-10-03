import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FlexLayoutModule } from '@angular/flex-layout';

const MODULE = [
  FlexLayoutModule,
  MatToolbarModule, MatButtonModule, MatIconModule,
  MatFormFieldModule, MatInputModule
]

@NgModule({
  imports: MODULE,
  exports: MODULE
})
export class MaterialModule {}
