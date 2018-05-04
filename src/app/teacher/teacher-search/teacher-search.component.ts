import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-search',
  templateUrl: './teacher-search.component.html',
  styleUrls: ['./teacher-search.component.less']
})
export class TeacherSearchComponent implements OnInit {

  selectedIndex = 0;

  tabs = [{
    name: '基本信息'
  }, {
    name: '可授科目'
  }, {
    name: '教授區域'
  }, {
    name: '導師學歷'
  }, {
    name: '音樂成績'
  }, {
    name: '詳細資料'
  }, {
    name: '職業信息'
  }, {
    name: '其他技能'
  }];

  constructor() { }

  changePage() {
    this.selectedIndex += 1;
  }

  changePageDown() {
    this.selectedIndex -= 1;
  }

  ngOnInit() {
  }

}
