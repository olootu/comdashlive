import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfDevicesPerSystemComponent } from './number-of-devices-per-system.component';

describe('NumberOfDevicesPerSystemComponent', () => {
  let component: NumberOfDevicesPerSystemComponent;
  let fixture: ComponentFixture<NumberOfDevicesPerSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberOfDevicesPerSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberOfDevicesPerSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
