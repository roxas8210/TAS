import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-teacher-search-other',
  templateUrl: './teacher-search-other.component.html',
  styleUrls: ['./teacher-search-other.component.less']
})
export class TeacherSearchOtherComponent implements OnInit {

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
