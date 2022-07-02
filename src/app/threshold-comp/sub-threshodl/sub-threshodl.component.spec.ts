import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubThreshodlComponent } from './sub-threshodl.component';

describe('SubThreshodlComponent', () => {
  let component: SubThreshodlComponent;
  let fixture: ComponentFixture<SubThreshodlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubThreshodlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubThreshodlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
