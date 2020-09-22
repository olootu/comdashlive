import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';

export const coreReportStateFeatureKey = 'coreReportState';

export interface CoreReportState {

}

export const reducers: ActionReducerMap<CoreReportState> = {

};


export const metaReducers: MetaReducer<CoreReportState>[] = !environment.production ? [] : [];
