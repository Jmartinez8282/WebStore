import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAccComponent } from './card-acc.component';

describe('CardAccComponent', () => {
  let component: CardAccComponent;
  let fixture: ComponentFixture<CardAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
