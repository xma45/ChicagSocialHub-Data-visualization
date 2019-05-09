import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewBarChartComponent } from './review-bar.component';

describe('ReviewBarChartComponent', () => {
  let component: ReviewBarChartComponent;
  let fixture: ComponentFixture<ReviewBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
