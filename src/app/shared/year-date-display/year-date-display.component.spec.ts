import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearDateDisplayComponent } from './year-date-display.component';

describe('YearDateDisplayComponent', () => {
  let component: YearDateDisplayComponent;
  let fixture: ComponentFixture<YearDateDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearDateDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearDateDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
