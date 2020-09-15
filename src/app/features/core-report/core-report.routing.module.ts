import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreReportComponent } from './core-report-home/core-report.component';

const routes: Routes = [
    { path: '', component: CoreReportComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class CoreReportRoutingModule { }
