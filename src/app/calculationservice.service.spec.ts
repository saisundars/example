import { TestBed } from '@angular/core/testing';

import { CalculationserviceService } from './calculationservice.service';

describe('CalculationserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculationserviceService = TestBed.get(CalculationserviceService);
    expect(service).toBeTruthy();
  });
});
