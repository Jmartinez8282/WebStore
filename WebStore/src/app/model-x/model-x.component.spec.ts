import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelXComponent } from './model-x.component';

describe('ModelXComponent', () => {
  let component: ModelXComponent;
  let fixture: ComponentFixture<ModelXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
