import { Action } from '@ngrx/store';
import { Report } from '../models/report.model';

export enum CoreReportActionTypes {
  LoadCoreReport = '[CoreReport] Load CoreReport',
  LoadCoreReportSuccess = '[CoreReports] Load CoreReport Success',
  LoadCoreReportFailure = '[CoreReport] Load CoreReport Failure'
}

export class LoadCoreReport implements Action {
  readonly type = CoreReportActionTypes.LoadCoreReport;
}

export class LoadCoreReportSuccess implements Action {
  readonly type = CoreReportActionTypes.LoadCoreReportSuccess;
  constructor(public payload: Report[]) { }
}

export class LoadCoreReportFailure implements Action {
  readonly type = CoreReportActionTypes.LoadCoreReportFailure;
  constructor(public payload: string) { }
}

export type CoreReportActions = LoadCoreReport | LoadCoreReportSuccess | LoadCoreReportFailure;

