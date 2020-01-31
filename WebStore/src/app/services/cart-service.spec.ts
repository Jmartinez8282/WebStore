import { TestBed } from '@angular/core/testing';

import { CartServices } from './cart.service';

describe('CartServices', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartServices = TestBed.get(CartServices);
    expect(service).toBeTruthy();
  });
});
