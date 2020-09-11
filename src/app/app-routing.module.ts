import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreReportModule } from '../app/components/core-report/core-report.module';
import { LoginModule } from '../app/login/login.module';

const routes: Routes = [
  { path: '', loadChildren: '../app/login/login.module#LoginModule' },
  {
    path: 'core-report',
    loadChildren: '../app/components/core-report/core-report.module#CoreReportModule'
  },
  {
    path: 'lines-inventory',
    loadChildren: '../app/components/core-report/core-report.module#CoreReportModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
