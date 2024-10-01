import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardForWidgetComponent } from './dashboard-for-widget.component';

describe('DashboardForWidgetComponent', () => {
  let component: DashboardForWidgetComponent;
  let fixture: ComponentFixture<DashboardForWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardForWidgetComponent]
    });
    fixture = TestBed.createComponent(DashboardForWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
