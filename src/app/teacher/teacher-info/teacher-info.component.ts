import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.less']
})
export class TeacherInfoComponent implements OnInit {

  levelOptions = [{
    label: '一级',
    value: '一级'
  }];

  infoList = [{
    id: 0,
    value: '',
    text: '導師身份證英文名',
    bak: '導師身份證英文名',
    status: false
  }, {
    id: 1,
    value: '',
    text: '導師身份證中文名',
    bak: '導師身份證中文名',
    status: false
  }, {
    id: 2,
    value: '',
    text: '導師身份證號碼',
    bak: '導師身份證號碼',
    status: false
  }, {
    id: 3,
    value: '',
    text: '導師出生年份',
    bak: '導師出生年份',
    status: false
  }, {
    id: 4,
    value: '',
    text: '導師家居地址地區',
    bak: '導師家居地址地區',
    status: false
  }, {
    id: 5,
    value: '',
    text: '導師家居地址',
    bak: '導師家居地址',
    status: false
  }, {
    id: 6,
    value: '',
    text: '導師國籍',
    bak: '導師國籍',
    status: false
  }, {
    id: 7,
    value: '',
    text: '主要語言',
    bak: '主要語言',
    status: false
  }, {
    id: 8,
    value: '',
    text: '導師宗教信仰',
    bak: '導師宗教信仰',
    status: false
  }, {
    id: 9,
    value: '',
    text: '補習收費（最低）',
    bak: '補習收費（最低）',
    status: false
  }, {
    id: 10,
    value: '',
    text: '補習收費（最高）',
    bak: '補習收費（最高）',
    status: false
  }, {
    id: 11,
    value: '',
    text: '導師電郵地址',
    bak: '導師電郵地址',
    status: false
  }, {
    id: 12,
    value: '',
    text: '導師家庭電話',
    bak: '導師家庭電話',
    status: false
  }, {
    id: 13,
    value: '',
    text: '導師手提電話',
    bak: '導師手提電話',
    status: false
  }, {
    id: 14,
    value: '',
    text: '導師其他電話',
    bak: '導師其他電話',
    status: false
  }, {
    id: 15,
    value: '',
    text: '導師傳真電話',
    bak: '導師傳真電話',
    status: false
  }];

  modelChange(val) {
  }

  constructor() { }

  ngOnInit() {
  }

}
