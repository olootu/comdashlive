import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinesPerSystemComponent } from './lines-per-system.component';

describe('LinesPerSystemComponent', () => {
  let component: LinesPerSystemComponent;
  let fixture: ComponentFixture<LinesPerSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinesPerSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinesPerSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
