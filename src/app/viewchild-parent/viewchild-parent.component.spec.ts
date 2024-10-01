import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildParentComponent } from './viewchild-parent.component';

describe('ViewchildParentComponent', () => {
  let component: ViewchildParentComponent;
  let fixture: ComponentFixture<ViewchildParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewchildParentComponent]
    });
    fixture = TestBed.createComponent(ViewchildParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
