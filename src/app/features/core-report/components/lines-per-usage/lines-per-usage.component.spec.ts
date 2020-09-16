import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinesPerUsageComponent } from './lines-per-usage.component';

describe('LinesPerUsageComponent', () => {
  let component: LinesPerUsageComponent;
  let fixture: ComponentFixture<LinesPerUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinesPerUsageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinesPerUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
