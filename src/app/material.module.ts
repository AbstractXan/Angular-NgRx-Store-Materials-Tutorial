import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [MatButtonModule,MatCardModule, MatToolbarModule],
  exports: [MatButtonModule,MatCardModule, MatToolbarModule],
})
export class MaterialModule { }