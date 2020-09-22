import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CoreReportsService } from '../services/core-report.service';
import * as fromReportActions from '../store/core-report.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';



@Injectable()
export class CoreReportEffects {

  loadReport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromReportActions.loadCoreReports),
      mergeMap(() =>
        this.reportService.getData().pipe(
          map(report => fromReportActions.loadCoreReportsSuccess({ report })),
          catchError(error => of(fromReportActions.loadCoreReportsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private reportService: CoreReportsService
  ) { }

}
