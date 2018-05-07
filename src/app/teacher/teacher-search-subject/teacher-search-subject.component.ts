import { Component, OnInit } from '@angular/core';
import { subject } from '../../checkbox-data/subject.data';
import { Store } from '@ngrx/store';
import { push_teacher_search_subject } from '../../actions/teacher-search/teacher-search-tags.action';

@Component({
  selector: 'app-teacher-search-subject',
  templateUrl: './teacher-search-subject.component.html',
  styleUrls: ['./teacher-search-subject.component.less']
})
export class TeacherSearchSubjectComponent implements OnInit {

  subjectArray = subject;

  constructor(
    private store$: Store<any>
  ) { }

  // 選中時過濾已選到的數據
  postSubject(value) {
    const filterSubject = value.filter(val => val.checked === true);
    console.log(filterSubject);
    this.store$.dispatch(push_teacher_search_subject(filterSubject));
  }

  ngOnInit() {
  }

}
