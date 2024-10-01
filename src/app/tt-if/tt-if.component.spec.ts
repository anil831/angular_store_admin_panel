import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtIfComponent } from './tt-if.component';

describe('TtIfComponent', () => {
  let component: TtIfComponent;
  let fixture: ComponentFixture<TtIfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TtIfComponent]
    });
    fixture = TestBed.createComponent(TtIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
