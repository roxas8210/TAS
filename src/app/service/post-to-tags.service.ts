import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PostToTagsService {

  subject = new Subject();

  constructor() { }

  getTags() {
    return this.subject;
  }

  setTags(post: {type: string, payload: any}) {
    this.subject.next(post);
  }
}
