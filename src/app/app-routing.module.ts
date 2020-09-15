import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './features/login/login.module';
import { DashboardModule } from './features/dashboard/dashboard.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: '../app/features/login/login.module#LoginModule'
  },
  {
    path: 'dashboard',
    loadChildren: '../app/features/dashboard/dashboard.module#DashboardModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
