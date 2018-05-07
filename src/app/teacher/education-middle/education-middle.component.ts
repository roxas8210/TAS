import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostToTagsService } from '../../service/post-to-tags.service';
import { Store } from '@ngrx/store';
import { push_teacher_search_educationMiddleData } from '../../actions/teacher-search/teacher-search-tags.action';

@Component({
  selector: 'app-education-middle',
  templateUrl: './education-middle.component.html',
  styleUrls: ['./education-middle.component.less']
})
export class EducationMiddleComponent implements OnInit {

  middleForm: FormGroup;

  levelOptions = [{
    label: '1',
    value: '1',
    text: '一级',
    status: false
  }, {
    label: '2',
    value: '2',
    text: '二级',
    status: false
  }, {
    label: '3',
    value: '3',
    text: '三级',
    status: false
  }, {
    label: '4',
    value: '4',
    text: '四级',
    status: false
  }, {
    label: '5',
    value: '5',
    text: '五级',
    status: false
  }];

  subjectList = [
    '中國語文', '英國語文', '數學',
    '中國文學', '英國文學', '世界歷史', '中國歷史', '地理', '音樂',
    '化學', '生物', '物理', '附加數學',
    '商業學', '會計學', '經濟', '電腦', '打字'
  ];

  educationMiddleList = [{
    id: 0,
    value: '',
    text: '中國語文',
    bak: '中國語文',
    status: false
  }, {
    id: 1,
    value: '',
    text: '英國語文',
    bak: '英國語文',
    status: false
  }, {
    id: 2,
    value: '',
    text: '數學',
    bak: '數學',
    status: false
  }, {
    id: 3,
    value: '',
    text: '中國文學',
    bak: '中國文學',
    status: false
  }, {
    id: 4,
    value: '',
    text: '英國文學',
    bak: '英國文學',
    status: false
  }, {
    id: 5,
    value: '',
    text: '世界歷史',
    bak: '世界歷史',
    status: false
  }, {
    id: 6,
    value: '',
    text: '中國歷史',
    bak: '中國歷史',
    status: false
  }, {
    id: 7,
    value: '',
    text: '地理',
    bak: '地理',
    status: false
  }, {
    id: 8,
    value: '',
    text: '音樂',
    bak: '音樂',
    status: false
  }, {
    id: 9,
    value: '',
    text: '化學',
    bak: '化學',
    status: false
  }, {
    id: 10,
    value: '',
    text: '生物',
    bak: '生物',
    status: false
  }, {
    id: 11,
    value: '',
    text: '物理',
    bak: '物理',
    status: false
  }, {
    id: 12,
    value: '',
    text: '附加數學',
    bak: '附加數學',
    status: false
  }, {
    id: 13,
    value: '',
    text: '商業學',
    bak: '商業學',
    status: false
  }, {
    id: 14,
    value: '',
    text: '會計學',
    bak: '會計學',
    status: false
  }, {
    id: 15,
    value: '',
    text: '經濟',
    bak: '經濟',
    status: false
  }, {
    id: 16,
    value: '',
    text: '電腦',
    bak: '電腦',
    status: false
  }, {
    id: 17,
    value: '',
    text: '打字',
    bak: '打字',
    status: false
  }];

  constructor(
    private fb: FormBuilder,
    private tagsService: PostToTagsService,
    private store$: Store<any>
  ) { }

  changeModel(val) {
    if (this.educationMiddleList[val].text) {
      this.educationMiddleList[val].text = this.educationMiddleList[val].bak + this.educationMiddleList[val].value;
      this.educationMiddleList[val].status = true;
      const obj = this.educationMiddleList.filter(v => v.status === true);
      this.store$.dispatch(push_teacher_search_educationMiddleData(obj));
    } else {
      this.educationMiddleList[val].status = false;
    }
  }

  ngOnInit() {
    this.middleForm = this.fb.group({
      chinese: [''],
      english: [''],
      math: [''],
      chineseLiterature: [''],
      englishLiterature: [''],
      worldHistory: [''],
      chineseHistory: [''],
      geography: [''],
      music: [''],
      chemistry: [''],
      biology: [''],
      physics: [''],
      mathPlus: [''],
      bussniss: [''],
      account: [''],
      economic: [''],
      computer: [''],
      press: [''],
    });
    this.middleForm.valueChanges.subscribe((val: Object) => {

      // 对象转数组
      const array = [];
      for (const i in val) {
        if (i) {
          array.push(val[i]);
        }
      }

      // 修改数组中的text内容
      array.map((element, index) => {
        if (element) {
          if (element.status === false) {
            const preText = this.subjectList[index];
            element.text = preText + element.text;
            element.status = true;
          }
        }
      });

      console.log(array);
      const filter = array.filter(v => v instanceof Object);
      console.log(filter);
      this.tagsService.setTags({ type: 'education-middle', payload: filter });
    });
  }

}
