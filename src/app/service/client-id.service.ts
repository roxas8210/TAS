import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ClientIdService {
  // subject = new BehaviorSubject('0');
  subject = new Subject();
  id: string;

  constructor() { }

  getClientId() {
    return this.subject;
    // return this.id;
  }

  setClientId(id) {
    this.subject.next(id);
    // this.id = id;
  }
}
