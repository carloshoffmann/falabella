import { TestBed } from '@angular/core/testing';

import { SuperHeroApiWrapperService } from './superheroapi-wrapper.service';

describe('SuperHeroApiWrapperService', () => {
  let service: SuperHeroApiWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperHeroApiWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
