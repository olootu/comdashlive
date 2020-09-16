import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineUtilisationComponent } from './line-utilisation.component';

describe('LineUtilisationComponent', () => {
  let component: LineUtilisationComponent;
  let fixture: ComponentFixture<LineUtilisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineUtilisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineUtilisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
