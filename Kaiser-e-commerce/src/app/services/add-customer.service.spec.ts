import { TestBed, inject } from '@angular/core/testing';

import { AddCustomerService } from './add-customer.service';

describe('AddCustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddCustomerService]
    });
  });

  it('should be created', inject([AddCustomerService], (service: AddCustomerService) => {
    expect(service).toBeTruthy();
  }));
});
