import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfLocationsComponent } from './number-of-locations.component';

describe('NumberOfLocationsComponent', () => {
  let component: NumberOfLocationsComponent;
  let fixture: ComponentFixture<NumberOfLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberOfLocationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberOfLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
