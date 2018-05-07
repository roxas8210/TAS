import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-education-history',
  templateUrl: './teacher-education-history.component.html',
  styleUrls: ['./teacher-education-history.component.less']
})
export class TeacherEducationHistoryComponent implements OnInit {

  levelOptions = [{
    label: '一级',
    value: '一级',
  }];

  historyList = [{
    id: 0,
    value: '',
    text: '其他會考科目成績',
    bak: '其他會考科目成績',
    status: false
  }, {
    id: 1,
    value: '',
    text: '其他高考/高補程度會考科目成績',
    bak: '其他高考/高補程度會考科目成績',
    status: false
  }, {
    id: 2,
    value: '',
    text: '最高教育程度',
    bak: '最高教育程度',
    status: false
  }, {
    id: 3,
    value: '',
    text: '就讀小學',
    bak: '就讀小學',
    status: false
  }, {
    id: 4,
    value: '',
    text: '就讀中學',
    bak: '就讀中學',
    status: false
  }, {
    id: 5,
    value: '',
    text: '中學主要教學語言',
    bak: '中學主要教學語言',
    status: false
  }, {
    id: 6,
    value: '',
    text: '就讀大學',
    bak: '就讀大學',
    status: false
  }, {
    id: 7,
    value: '',
    text: '其他大學',
    bak: '其他大學',
    status: false
  }, {
    id: 8,
    value: '',
    text: '高中修讀科目類別',
    bak: '高中修讀科目類別',
    status: false
  }, {
    id: 9,
    value: '',
    text: '大學主修科目',
    bak: '大學主修科目',
    status: false
  }, {
    id: 10,
    value: '',
    text: '其他修讀課程',
    bak: '其他修讀課程',
    status: false
  }, {
    id: 11,
    value: '',
    text: '其他專業認可課程',
    bak: '其他專業認可課程',
    status: false
  }, {
    id: 12,
    value: '',
    text: '現時就讀年級',
    bak: '現時就讀年級',
    status: false
  }, {
    id: 13,
    value: '',
    text: '香港中學會考分數（六科成績總分）',
    bak: '香港中學會考分數（六科成績總分）',
    status: false
  }, {
    id: 14,
    value: '',
    text: '香港中學會考主要應考語言',
    bak: '香港中學會考主要應考語言',
    status: false
  }];

  otherScore;

  constructor() { }

  modelChange(test) {
    console.log('test');
  }

  ngOnInit() {
  }

}
