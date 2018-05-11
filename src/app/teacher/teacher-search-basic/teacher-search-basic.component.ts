import { Component, OnInit } from '@angular/core';
import { sex } from '../../option-data/sex.data';

import { Store } from '@ngrx/store';
import { push_teacher_search_basic, push_teacher_search_zodiac } from '../../actions/teacher-search/teacher-search-tags.action';
import { HighestEducation } from '../../option-data/highest-education.data';
import { Zodiac } from '../../option-data/zodiac.data';
import { HighestGrade } from '../../option-data/highest-grade.data';
import { HK } from '../../option-data/hongkong.data';
import { TeacherStatus } from '../../option-data/teacher-status.data';
import { UseTime } from '../../option-data/use-time.data';
import { Average } from '../../option-data/average.data';
import { CaseAmount } from '../../option-data/case-amount.data';

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

  // 最高可補年級
  highestGrade = HighestGrade;

  // 最高教育程度
  heighestEduOptions = HighestEducation;

  // 性別
  sexOptions = sex;

  // 生肖
  zodiacArray = Zodiac;

  // 居住地區
  livingArea = HK;

  // 導師狀態
  teacherStatus = TeacherStatus;

  // 用本平台時間
  useTime = UseTime;

  // 平均分
  averageOptions = Average;

  // 已接個案數
  caseAmountOptions = CaseAmount;

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
    text: '導師居住地區：',
    bak: '導師居住地區：',
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
