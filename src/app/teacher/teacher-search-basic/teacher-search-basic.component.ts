import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { sex } from '../../option-data/sex.data';
import { PostToTagsService } from '../../service/post-to-tags.service';

@Component({
  selector: 'app-teacher-search-basic',
  templateUrl: './teacher-search-basic.component.html',
  styleUrls: ['./teacher-search-basic.component.less']
})
export class TeacherSearchBasicComponent implements OnInit, OnDestroy {

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
    value: '0',
    text: '男'
  }, {
    label: '女',
    value: '1',
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

  searchBasic: FormGroup;

  constructor(
    private fb: FormBuilder,
    private tagsService: PostToTagsService
  ) {}

  postSubject(zodiac) {
    // console.log(zodiac);
    const fliterZodiac = zodiac.filter(val => val.checked === true);
    this.tagsService.setTags({ type: 'zodiac', payload: fliterZodiac });
  }

  ngOnInit() {
    this.searchBasic = this.fb.group({
      sex: [''],
      highestEdu: [''],
      highestGrade: [''],
      livingArea: [''],
      status: [''],
      passed: [''],
      avg: [''],
      case: [''],
      useTime: ['']
    });
    // this.searchBasic.setValue(this.store$.select('teacherSearchBasic'));
    this.searchBasic.valueChanges.subscribe((val: Object) => {
      const array = [];
      for (const i in val) {
        if (i) {
          array.push(val[i]);
        }
      }
      console.log(array);
      const filter = array.filter(v => v !== '');
      console.log(filter);
      this.tagsService.setTags({type: 'basic', payload: filter});
    });
  }

  ngOnDestroy() {
    console.log('basis destroy');
  }

}
