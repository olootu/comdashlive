import { Component, OnInit } from '@angular/core';
import { CoreReportsService } from '../services/core-report.service';
import { Store, select } from '@ngrx/store';
import { CoreReportState, selectReports } from '../store';
import * as fromActions from '../store/core-report.actions';
import { Observable } from 'rxjs';
import { Report } from '../models/report.model';

@Component({
  selector: 'core-report',
  templateUrl: './core-report.component.html',
  styleUrls: ['./core-report.component.scss']
})
export class CoreReportComponent implements OnInit {

  report$: Observable<Report[]>;

  constructor(
    private http: CoreReportsService,
    private store: Store<CoreReportState>

  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadCoreReports());
    this.loadReport();
  }

  loadReport(): void {
    this.report$ = this.store.pipe(select(selectReports));
  }
}
