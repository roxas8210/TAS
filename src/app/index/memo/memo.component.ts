import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Memo } from '../../domain/memo.model';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemoComponent implements OnInit {

  memoList: Memo[] = [{
    memo: '祝大家開工大吉，日日爆單，團結一致，努力搵錢。',
    id: '1',
    userId: '2'
  }, {
      memo: '祝大家開工大吉，日日爆單，團結一致，努力搵錢。',
      id: '1',
      userId: '2'
  }];

  pageIndex = '1';

  total = 0;

  slide() {
    console.log(this.pageIndex);
  }

  changePage() {
    console.log('test');
  }

  constructor(private cr: ChangeDetectorRef) {
    // setTimeout(() => {
    //   this.total = this.memoList.length;
    //   this.cr.markForCheck();
    //   console.log(this.total);
    // }, 3000);
  }

  ngOnInit() {
  }

}
