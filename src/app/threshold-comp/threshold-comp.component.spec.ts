import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThresholdCompComponent } from './threshold-comp.component';

describe('ThresholdCompComponent', () => {
  let component: ThresholdCompComponent;
  let fixture: ComponentFixture<ThresholdCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThresholdCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThresholdCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
