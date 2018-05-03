import { Component, OnInit } from '@angular/core';
import { subject } from '../../checkbox-data/subject.data';
import { PostToTagsService } from '../../service/post-to-tags.service';

@Component({
  selector: 'app-teacher-search-subject',
  templateUrl: './teacher-search-subject.component.html',
  styleUrls: ['./teacher-search-subject.component.less']
})
export class TeacherSearchSubjectComponent implements OnInit {

  subjectArray = subject;

  constructor(private tagsService: PostToTagsService) { }

  // 選中時過濾已選到的數據
  postSubject(value) {
    const filterSubject = value.filter(val => val.checked === true);
    console.log(filterSubject);
    this.tagsService.setTags({type: 'subject', payload: filterSubject});
  }

  ngOnInit() {
  }

}
