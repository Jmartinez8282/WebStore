import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardm3Component } from './cardm3.component';

describe('Cardm3Component', () => {
  let component: Cardm3Component;
  let fixture: ComponentFixture<Cardm3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardm3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cardm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
