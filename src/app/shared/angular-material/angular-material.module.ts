import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule, } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


const matItems = [
  MatSliderModule,
  MatToolbarModule,
  MatIconModule,
  FlexLayoutModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    matItems
  ],
  exports: [
    matItems

  ]
})
export class AngularMaterialModule { }
