import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelYComponent } from './model-y.component';

describe('ModelYComponent', () => {
  let component: ModelYComponent;
  let fixture: ComponentFixture<ModelYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
