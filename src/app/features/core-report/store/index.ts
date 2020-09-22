import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { Report } from '../models/report.model';
import { loadCoreReportsSuccess, loadCoreReportsFailure } from './core-report.actions';

export const coreReportStateFeatureKey = 'coreReportState';

export interface CoreReportState {
  report: Report[];
  error: any;
  loaded: any;
  loading: any;
}

export const initialState: CoreReportState = {
  report: undefined,
  error: undefined,
  loaded: false,
  loading: false

};


export const reducers = createReducer(
  initialState,
  on(loadCoreReportsSuccess, (state, action) => {
    return {
      report: action.report
    };
  }),
  on(loadCoreReportsFailure, (state, action) => {
    return {
      report: state.report,
      error: action.error
    };
  })
);

export const selectCoreReportFeature = createFeatureSelector<CoreReportState>(
  coreReportStateFeatureKey
);

export const selectReports = createSelector(
  selectCoreReportFeature,
  (state: CoreReportState) => state.report
);


export const metaReducers: MetaReducer<CoreReportState>[] = !environment.production ? [] : [];
