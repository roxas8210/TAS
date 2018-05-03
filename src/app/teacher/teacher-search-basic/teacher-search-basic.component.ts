import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-teacher-search-basic',
  templateUrl: './teacher-search-basic.component.html',
  styleUrls: ['./teacher-search-basic.component.less']
})
export class TeacherSearchBasicComponent implements OnInit {

  levelOptions = [{
    label: '1',
    value: '1'
  }];

  fg: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.fg = this.fb.group({
      sex: [''],
      highestEdu: [''],
      highestGrade: [''],
      livingArea: [''],
      status: [''],
      passed: ['']
    });
  }

}
