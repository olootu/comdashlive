import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';

const pnItems = [
  ButtonModule,
  CalendarModule
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    pnItems

  ],
  exports: [
    pnItems
  ]
})
export class PrimeNgModule { }
