import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.modules';
import { CoreReportModule } from '../core-report/core-report.module';
import { DashboardComponent } from './dashboard-home/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'core-report',
        loadChildren: '../core-report/core-report.module#CoreReportModule'
      },
      {
        path: '**',
        redirectTo: 'core-report'
      }
    ]
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardRoutingModule { }
