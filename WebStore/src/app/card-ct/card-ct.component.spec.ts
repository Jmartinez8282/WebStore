import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCtComponent } from './card-ct.component';

describe('CardCtComponent', () => {
  let component: CardCtComponent;
  let fixture: ComponentFixture<CardCtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
