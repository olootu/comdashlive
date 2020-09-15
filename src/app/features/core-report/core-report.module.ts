import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreReportRoutingModule } from './core-report.routing.module';
import { CoreReportComponent } from './core-report-home/core-report.component';
import { SharedModule } from '../../shared/shared.modules';
import { DatesComponent } from './components/dates/dates.component';
import { LinesPerSystemComponent } from './components/lines-per-system/lines-per-system.component';



@NgModule({
  declarations: [CoreReportComponent, DatesComponent, LinesPerSystemComponent],
  imports: [
    CommonModule,
    CoreReportRoutingModule,
    SharedModule
  ]
})
export class CoreReportModule { }
