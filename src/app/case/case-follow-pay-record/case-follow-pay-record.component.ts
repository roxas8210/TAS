import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-follow-pay-record',
  templateUrl: './case-follow-pay-record.component.html',
  styleUrls: ['./case-follow-pay-record.component.less']
})
export class CaseFollowPayRecordComponent implements OnInit {

  payRecordList = [{
    payDate: '2017-04-30 13:13:13',
    payType: '課款',
    paySum: '999999',
    payAccount: '李先生',
    brokerage: 'anna'
  }, {
    payDate: '2017-04-30 13:13:13',
    payType: '課款',
    paySum: '999999',
    payAccount: '李小姐',
    brokerage: 'anna'
  }, {
    payDate: '2017-04-30 13:13:13',
    payType: '課款',
    paySum: '999999',
    payAccount: '李先生',
    brokerage: 'anna'
  }];

  constructor() { }

  ngOnInit() {
  }

}
