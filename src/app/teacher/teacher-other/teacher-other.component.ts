import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-other',
  templateUrl: './teacher-other.component.html',
  styleUrls: ['./teacher-other.component.less']
})
export class TeacherOtherComponent implements OnInit {

  levelOptions = [{
    label: '1',
    value: '1'
  }];

  otherList = [{
    id: 0,
    value: '',
    text: '補習方面，可否提供筆記',
    bak: '補習方面，可否提供筆記',
    status: false
  }, {
    id: 1,
    value: '',
    text: '音樂成績（樂器）',
    bak: '音樂成績（樂器）',
    status: false
  }, {
    id: 2,
    value: '',
    text: '其他樂器、級別及考取年份',
    bak: '其他樂器、級別及考取年份',
    status: false
  }, {
    id: 3,
    value: '',
    text: '已考樂理級別',
    bak: '已考樂理級別',
    status: false
  }, {
    id: 4,
    value: '',
    text: '已考獲資格（學院名稱）',
    bak: '已考獲資格（學院名稱）',
    status: false
  }, {
    id: 5,
    value: '',
    text: '可教授之電腦程式/軟件',
    bak: '可教授之電腦程式/軟件',
    status: false
  }, {
    id: 6,
    value: '',
    text: '可教授游泳技能/泳式',
    bak: '可教授游泳技能/泳式',
    status: false
  }, {
    id: 7,
    value: '',
    text: '課外活動或校內外組織',
    bak: '課外活動或校內外組織',
    status: false
  }];

  modelChange;

  constructor() { }

  ngOnInit() {
  }

}
