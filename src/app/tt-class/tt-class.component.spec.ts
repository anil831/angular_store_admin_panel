import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtClassComponent } from './tt-class.component';

describe('TtClassComponent', () => {
  let component: TtClassComponent;
  let fixture: ComponentFixture<TtClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TtClassComponent]
    });
    fixture = TestBed.createComponent(TtClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
