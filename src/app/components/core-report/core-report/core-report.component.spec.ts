import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreReportComponent } from './core-report.component';

describe('CoreReportComponent', () => {
  let component: CoreReportComponent;
  let fixture: ComponentFixture<CoreReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
