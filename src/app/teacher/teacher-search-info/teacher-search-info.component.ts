import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-teacher-search-info',
  templateUrl: './teacher-search-info.component.html',
  styleUrls: ['./teacher-search-info.component.less']
})
export class TeacherSearchInfoComponent implements OnInit {

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
