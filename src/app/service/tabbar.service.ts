import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Tabbar } from '../domain/tabbar.model';

@Injectable()
export class TabbarService {

  subject = new Subject();

  constructor() { }

  getTabbar() {
    return this.subject;
  }

  setTabbar(tabbar: Tabbar) {
    this.subject.next(tabbar);
  }

}
