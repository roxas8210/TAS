import { Component, OnInit } from '@angular/core';
import { sex } from '../../option-data/sex.data';

import { Store } from '@ngrx/store';
import { push_teacher_search_basic, push_teacher_search_zodiac } from '../../actions/teacher-search/teacher-search-tags.action';

@Component({
  selector: 'app-teacher-search-basic',
  templateUrl: './teacher-search-basic.component.html',
  styleUrls: ['./teacher-search-basic.component.less']
})
export class TeacherSearchBasicComponent implements OnInit {

  levelOptions = [{
    label: '10',
    value: '10',
    text: '已接个案数：10'
  }, {
    label: '9',
    value: '9',
    text: '9'
  }];

  heighestEduOptions = [{
    label: '大学',
    text: '最高教育程度：大学',
    value: '0'
  }, {
    label: '小学',
    text: '最高教育程度：小学',
    value: '1'
  }];

  sexOptions = [{
    label: '男',
    value: '男',
    text: '男'
  }, {
    label: '女',
    value: '女',
    text: '女'
  }];

  zodiacArray = [{
    label: '鼠',
    value: '鼠',
    checked: false,
    text: '鼠',
  }, {
    label: '牛',
    value: '牛',
    checked: false,
    text: '牛',
  }, {
    label: '虎',
    value: '虎',
    checked: false,
    text: '虎',
  }, {
    label: '兔',
    value: '兔',
    checked: false,
    text: '兔',
  }, {
    label: '龙',
    value: '龙',
    checked: false,
    text: '龙',
  }, {
    label: '蛇',
    value: '蛇',
    checked: false,
    text: '蛇',
  }, {
    label: '马',
    value: '马',
    checked: false,
    text: '马',
  }, {
    label: '羊',
    value: '羊',
    checked: false,
    text: '羊',
  }, {
    label: '猴',
    value: '猴',
    checked: false,
    text: '猴',
  }, {
    label: '鸡',
    value: '鸡',
    checked: false,
    text: '鸡',
  }, {
    label: '鸡',
    value: '鸡',
    checked: false,
    text: '鸡',
  }, {
    label: '猪',
    value: '猪',
    checked: false,
    text: '猪',
  }];

  basicList = [{
    id: 0,
    value: '',
    text: '性别',
    bak: '性别',
    status: false
  }, {
    id: 1,
    value: '',
    text: '最高教育程度：',
    bak: '最高教育程度：',
    status: false
  }, {
    id: 2,
    value: '',
    text: '最高可補年級：',
    bak: '最高可補年級：',
    status: false
  }, {
    id: 3,
    value: '',
    text: '導師家具地址地區：',
    bak: '導師家具地址地區：',
    status: false
  }, {
    id: 4,
    value: '',
    text: '狀態',
    bak: '狀態',
    status: false
  }, {
    id: 5,
    value: '',
    text: '用本平臺時間',
    bak: '用本平臺時間',
    status: false
  }, {
    id: 6,
    value: '',
    text: '平均評分',
    bak: '平均評分',
    status: false
  }, {
    id: 7,
    value: '',
    text: '已接個案數',
    bak: '已接個案數',
    status: false
  }];

  constructor(
    private store$: Store<any>
  ) {}

  modelChange(val) {
    if (this.basicList[val].text) {
      this.basicList[val].text = this.basicList[val].bak + this.basicList[val].value;
      this.basicList[val].status = true;
      const obj = this.basicList.filter(v => v.status === true);
      this.store$.dispatch(push_teacher_search_basic(obj));
    } else {
      this.basicList[val].status = false;
    }
  }

  postSubject(zodiac) {
    const fliterZodiac = zodiac.filter(val => val.checked === true);
    console.log(fliterZodiac);
    this.store$.dispatch(push_teacher_search_zodiac(fliterZodiac));
  }

  ngOnInit() {
  }

}
