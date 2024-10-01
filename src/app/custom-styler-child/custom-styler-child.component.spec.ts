import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStylerChildComponent } from './custom-styler-child.component';

describe('CustomStylerChildComponent', () => {
  let component: CustomStylerChildComponent;
  let fixture: ComponentFixture<CustomStylerChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomStylerChildComponent]
    });
    fixture = TestBed.createComponent(CustomStylerChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
