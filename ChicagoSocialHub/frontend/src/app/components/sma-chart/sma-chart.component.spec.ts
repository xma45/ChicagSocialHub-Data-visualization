 import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMAchartComponent } from './sma-chart.component';

describe('SMAComponent', () => {
  let component: SMAchartComponent;
  let fixture: ComponentFixture<SMAchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMAchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMAchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
