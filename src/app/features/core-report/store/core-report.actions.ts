import { createAction, props } from '@ngrx/store';
import { Report } from '../models/report.model';

export const loadCoreReports = createAction(
  '[CoreReport Home Component] Load CoreReports'
);

export const loadCoreReportsSuccess = createAction(
  '[CoreReport Effect] Load CoreReports Success',
  props<{ report: Report[] }>()
);

export const loadCoreReportsFailure = createAction(
  '[CoreReport Effect] Load CoreReports Failure',
  props<{ error: any }>()
);
