import { TestBed } from '@angular/core/testing';

import { AdservService } from './adserv.service';

describe('AdservService', () => {
  let service: AdservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
