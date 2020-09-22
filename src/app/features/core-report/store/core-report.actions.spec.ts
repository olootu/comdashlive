import * as fromCoreReport from './core-report.actions';

describe('loadCoreReports', () => {
  it('should return an action', () => {
    expect(fromCoreReport.loadCoreReports().type).toBe('[CoreReport] Load CoreReports');
  });
});
