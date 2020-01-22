import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberTComponent } from './cyber-t.component';

describe('CyberTComponent', () => {
  let component: CyberTComponent;
  let fixture: ComponentFixture<CyberTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyberTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
