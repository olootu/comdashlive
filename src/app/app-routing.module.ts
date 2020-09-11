import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreReportModule } from '../app/components/core-report/core-report.module';

const routes: Routes = [
  { path: '', redirectTo: '/core-report', pathMatch: 'full' },
  {
    path: 'core-report',
    loadChildren: '../app/components/core-report/core-report.module#CoreReportModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
