import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-education',
  templateUrl: './teacher-education.component.html',
  styleUrls: ['./teacher-education.component.less']
})
export class TeacherEducationComponent implements OnInit {

  selectedIndex = 0;

  tabs = [{
    name: '香港中學會考',
  }, {
    name: '香港高級程度會考'
  }, {
    name: '香港中學文憑'
  }, {
    name: '其他語文科目'
  }, {
    name: '学习经历'
  }];

  constructor() { }

  ngOnInit() {
  }

}
