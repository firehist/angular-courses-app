import { TestBed, async, inject } from '@angular/core/testing';

import { ProductIdGuard } from './product-id.guard';

describe('ProductIdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductIdGuard]
    });
  });

  it('should ...', inject([ProductIdGuard], (guard: ProductIdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
