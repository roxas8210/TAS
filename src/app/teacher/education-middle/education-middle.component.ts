import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostToTagsService } from '../../service/post-to-tags.service';

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

  constructor(
    private fb: FormBuilder,
    private tagsService: PostToTagsService
  ) { }

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
