import { Component, OnInit } from '@angular/core';
import { CoreReportsService } from '../services/core-report.service';
import { Store } from '@ngrx/store';
import { CoreReportState } from '../store';
import * as fromActions from '../store/core-report.actions';

@Component({
  selector: 'core-report',
  templateUrl: './core-report.component.html',
  styleUrls: ['./core-report.component.scss']
})
export class CoreReportComponent implements OnInit {

  constructor(
    private http: CoreReportsService,
    private store: Store<CoreReportState>

  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadCoreReports());
    this.loadReport();
  }

  loadReport() {
    this.http.getData()
      .subscribe(report => {
        this.store.dispatch(fromActions.loadCoreReportsSuccess({ report: report }));
        console.log(report);
      },
        error => {
          this.store.dispatch(fromActions.loadCoreReportsFailure({ error: error }));
        });
  }

}
