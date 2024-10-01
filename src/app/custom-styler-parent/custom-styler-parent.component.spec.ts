import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStylerParentComponent } from './custom-styler-parent.component';

describe('CustomStylerParentComponent', () => {
  let component: CustomStylerParentComponent;
  let fixture: ComponentFixture<CustomStylerParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomStylerParentComponent]
    });
    fixture = TestBed.createComponent(CustomStylerParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
