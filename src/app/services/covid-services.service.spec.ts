import { TestBed } from '@angular/core/testing';

import { CovidServicesService } from './covid-services.service';

describe('CovidServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CovidServicesService = TestBed.get(CovidServicesService);
    expect(service).toBeTruthy();
  });
});
