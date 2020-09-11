import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreReportRoutingModule } from './core-report.routing.module';
import { CoreReportComponent } from './core-report/core-report.component';
import { SharedModule } from '../../shared/shared.modules';



@NgModule({
  declarations: [CoreReportComponent],
  imports: [
    CommonModule,
    CoreReportRoutingModule,
    SharedModule
  ]
})
export class CoreReportModule { }
