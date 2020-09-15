import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimeButtonComponent } from './lime-button.component';

describe('LimeButtonComponent', () => {
  let component: LimeButtonComponent;
  let fixture: ComponentFixture<LimeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimeButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
