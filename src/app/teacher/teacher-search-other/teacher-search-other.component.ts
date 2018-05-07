import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { push_teacher_search_other } from '../../actions/teacher-search/teacher-search-tags.action';

@Component({
  selector: 'app-teacher-search-other',
  templateUrl: './teacher-search-other.component.html',
  styleUrls: ['./teacher-search-other.component.less']
})
export class TeacherSearchOtherComponent implements OnInit {

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

  constructor(private store$: Store<any>) { }

  modelChange(val) {
    if (this.otherList[val].value.length) {
      this.otherList[val].text = this.otherList[val].bak + this.otherList[val].value;
      this.otherList[val].status = true;
      const obj = this.otherList.filter(v => v.status === true);
      this.store$.dispatch(push_teacher_search_other(obj));
    } else {
      this.otherList[val].status = false;
    }
  }

  ngOnInit() {
  }

}
