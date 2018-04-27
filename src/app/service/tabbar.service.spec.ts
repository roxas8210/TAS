import { TestBed, inject } from '@angular/core/testing';

import { TabbarService } from './tabbar.service';

describe('TabbarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabbarService]
    });
  });

  it('should be created', inject([TabbarService], (service: TabbarService) => {
    expect(service).toBeTruthy();
  }));
});
