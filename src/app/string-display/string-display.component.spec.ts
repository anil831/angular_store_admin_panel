import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringDisplayComponent } from './string-display.component';

describe('StringDisplayComponent', () => {
  let component: StringDisplayComponent;
  let fixture: ComponentFixture<StringDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StringDisplayComponent]
    });
    fixture = TestBed.createComponent(StringDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
