import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreReportRoutingModule } from './core-report.routing.module';
import { CoreReportComponent } from './core-report-home/core-report.component';
import { SharedModule } from '../../shared/shared.modules';
import { DatesComponent } from './components/dates/dates.component';
import { LinesPerSystemComponent } from './components/lines-per-system/lines-per-system.component';
import { TimeComponent } from './components/time/time.component';
import { LineUtilisationComponent } from './components/line-utilisation/line-utilisation.component';
import { NumberOfLocationsComponent } from './components/number-of-locations/number-of-locations.component';
import { NumberOfDevicesPerSystemComponent } from './components/number-of-devices-per-system/number-of-devices-per-system.component';
import { NumberOfUsersPerLocationComponent } from './components/number-of-users-per-location/number-of-users-per-location.component';
import { LinesPerUsageComponent } from './components/lines-per-usage/lines-per-usage.component';
import { CallsComponent } from './components/calls/calls.component';


@NgModule({
  declarations: [
    CoreReportComponent,
    DatesComponent,
    LinesPerSystemComponent,
    TimeComponent,
    LineUtilisationComponent,
    NumberOfLocationsComponent,
    NumberOfDevicesPerSystemComponent,
    NumberOfUsersPerLocationComponent,
    LinesPerUsageComponent,
    CallsComponent
  ],
  imports: [
    CommonModule,
    CoreReportRoutingModule,
    SharedModule
  ]
})
export class CoreReportModule { }
