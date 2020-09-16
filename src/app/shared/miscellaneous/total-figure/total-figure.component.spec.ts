import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalFigureComponent } from './total-figure.component';

describe('TotalFigureComponent', () => {
  let component: TotalFigureComponent;
  let fixture: ComponentFixture<TotalFigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalFigureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
