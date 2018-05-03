import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-teacher-search-profession',
  templateUrl: './teacher-search-profession.component.html',
  styleUrls: ['./teacher-search-profession.component.less']
})
export class TeacherSearchProfessionComponent implements OnInit {

  fg: FormGroup;

  levelOptions = [{
    label: '1',
    value: '1'
  }];

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
