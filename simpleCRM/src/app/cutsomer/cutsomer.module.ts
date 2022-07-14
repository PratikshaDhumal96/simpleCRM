import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CutsomerRoutingModule } from './cutsomer-routing.module';
import { CutsomerComponent } from './cutsomer.component';


@NgModule({
  declarations: [
    CutsomerComponent
  ],
  imports: [
    CommonModule,
    CutsomerRoutingModule
  ]
})
export class CutsomerModule { }
