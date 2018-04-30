import { TestBed, inject } from '@angular/core/testing';

import { ClientIdService } from './client-id.service';

describe('ClientIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientIdService]
    });
  });

  it('should be created', inject([ClientIdService], (service: ClientIdService) => {
    expect(service).toBeTruthy();
  }));
});
