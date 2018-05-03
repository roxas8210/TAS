import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-education-middle',
  templateUrl: './education-middle.component.html',
  styleUrls: ['./education-middle.component.less']
})
export class EducationMiddleComponent implements OnInit {

  fg: FormGroup;

  levelOptions = [{
    label: '1',
    value: '1'
  }, {
    label: '2',
    value: '2'
  }, {
    label: '3',
    value: '3'
  }, {
    label: '4',
    value: '4'
  }, {
    label: '5',
    value: '5'
  }];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.fg = this.fb.group({
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

      sex: [''],
      highestEdu: [''],
      highestGrade: [''],
      livingArea: [''],
      status: [''],
      passed: ['']
    });
  }

}
