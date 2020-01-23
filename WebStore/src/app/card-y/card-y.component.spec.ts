import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardYComponent } from './card-y.component';

describe('CardYComponent', () => {
  let component: CardYComponent;
  let fixture: ComponentFixture<CardYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
