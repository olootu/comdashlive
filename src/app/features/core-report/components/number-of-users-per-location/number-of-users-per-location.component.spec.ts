import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfUsersPerLocationComponent } from './number-of-users-per-location.component';

describe('NumberOfUsersPerLocationComponent', () => {
  let component: NumberOfUsersPerLocationComponent;
  let fixture: ComponentFixture<NumberOfUsersPerLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberOfUsersPerLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberOfUsersPerLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
