import { TestBed, inject } from '@angular/core/testing';

import { PostToTagsService } from './post-to-tags.service';

describe('PostToTagsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostToTagsService]
    });
  });

  it('should be created', inject([PostToTagsService], (service: PostToTagsService) => {
    expect(service).toBeTruthy();
  }));
});
