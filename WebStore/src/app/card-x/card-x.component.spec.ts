import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardXComponent } from './card-x.component';

describe('CardXComponent', () => {
  let component: CardXComponent;
  let fixture: ComponentFixture<CardXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
