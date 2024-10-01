import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardForNotificationPanelComponent } from './dashboard-for-notification-panel.component';

describe('DashboardForNotificationPanelComponent', () => {
  let component: DashboardForNotificationPanelComponent;
  let fixture: ComponentFixture<DashboardForNotificationPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardForNotificationPanelComponent]
    });
    fixture = TestBed.createComponent(DashboardForNotificationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
