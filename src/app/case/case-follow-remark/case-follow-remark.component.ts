import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-follow-remark',
  templateUrl: './case-follow-remark.component.html',
  styleUrls: ['./case-follow-remark.component.less']
})
export class CaseFollowRemarkComponent implements OnInit {

  checkRemind = false;

  remindDate = '2018-05-14';

  remindTime = '12:25';

  selectAll = false;

  employeeOptions = [{
    label: 'anna',
    value: 'anna'
  }];

  remarkList = [{
    remark_time: '2018/05/09 15:48:30',
    operator: 'anna',
    remark_content: '#C',
    checked: false
  }, {
    remark_time: '2018/05/09 15:48:30',
    operator: 'mario',
    remark_content: '重新##',
    checked: false
  }, {
    remark_time: '2018/05/09 15:48:30',
    operator: 'anna',
    remark_content: '#C',
    checked: false
  }, {
    remark_time: '2018/05/09 15:48:30',
    operator: 'anna',
    remark_content: '#C',
    checked: false
  }];

  constructor() { }

  ngOnInit() {
  }

}
