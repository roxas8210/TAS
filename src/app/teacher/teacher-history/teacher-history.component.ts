import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-history',
  templateUrl: './teacher-history.component.html',
  styleUrls: ['./teacher-history.component.less']
})
export class TeacherHistoryComponent implements OnInit {

  levelOptions = [{
    label: '1',
    value: '1'
  }];

  professionList = [{
    id: 0,
    value: '',
    text: '現時職業',
    bak: '現時職業',
    status: false
  }, {
    id: 1,
    value: '',
    text: '工作經驗',
    bak: '工作經驗',
    status: false
  }, {
    id: 2,
    value: '',
    text: '過去工作資料（1）',
    bak: '過去工作資料（1）',
    status: false
  }, {
    id: 3,
    value: '',
    text: '過去工作資料（2）',
    bak: '過去工作資料（2）',
    status: false
  }, {
    id: 4,
    value: '',
    text: '補習經驗及年資',
    bak: '補習經驗及年資',
    status: false
  }, {
    id: 5,
    value: '',
    text: '最高可補年級',
    bak: '最高可補年級',
    status: false
  }, {
    id: 6,
    value: '',
    text: '教育機構經驗',
    bak: '教育機構經驗',
    status: false
  }];

  constructor() { }

  ngOnInit() {
  }

}
