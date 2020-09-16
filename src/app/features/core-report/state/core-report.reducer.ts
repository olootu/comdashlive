import { Action } from '@ngrx/store';
import { Report } from '../models/report.model';
import * as coreReportActions from './core-report.actions';
import * as fromRoot from '../../../state/app-state';


export const coreReportFeatureKey = 'coreReport';

export interface CoreReportState {
  reports: Report[];
}

export interface AppState extends fromRoot.AppState {
  reports: CoreReportState;
}

export const initialState: CoreReportState = {
  reports: []
};

export function reducer(state = initialState, action: Action): CoreReportState {
  switch (action.type) {
    case coreReportActions.CoreReportActionTypes.LoadCoreReport: {
      return {
        ...state
      };
    }
    case coreReportActions.CoreReportActionTypes.LoadCoreReportSuccess: {
      return {
        ...state
      };
    }
    case coreReportActions.CoreReportActionTypes.LoadCoreReportFailure: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
}
