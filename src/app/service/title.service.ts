import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TitleService {

  title: string;

  subj = new Subject();

  constructor() { }

  getTitle() {
    return this.subj;
  }

  setTitle(title) {
    this.subj.next(title);
  }
}
