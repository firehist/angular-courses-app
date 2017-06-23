import { TestBed, inject } from '@angular/core/testing';

import { ProductsResolveService } from './products-resolve.service';

describe('ProductsResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsResolveService]
    });
  });

  it('should be created', inject([ProductsResolveService], (service: ProductsResolveService) => {
    expect(service).toBeTruthy();
  }));
});
