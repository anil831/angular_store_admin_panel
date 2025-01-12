import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormContainerComponent } from './dynamic-form-container.component';

describe('DynamicFormContainerComponent', () => {
  let component: DynamicFormContainerComponent;
  let fixture: ComponentFixture<DynamicFormContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFormContainerComponent]
    });
    fixture = TestBed.createComponent(DynamicFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
