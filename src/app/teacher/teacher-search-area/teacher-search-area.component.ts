import { Component, OnInit } from '@angular/core';
import { subject } from '../../checkbox-data/subject.data';
import { PostToTagsService } from '../../service/post-to-tags.service';
import { area } from '../../checkbox-data/area.data';
import { Store } from '@ngrx/store';
import { push_teacher_search_area } from '../../actions/teacher-search/teacher-search-tags.action';

@Component({
  selector: 'app-teacher-search-area',
  templateUrl: './teacher-search-area.component.html',
  styleUrls: ['./teacher-search-area.component.less']
})
export class TeacherSearchAreaComponent implements OnInit {

  areaArray = area;

  splitArray = [];

  constructor(private store$: Store<any>) { }

  postArea(areas) {
    const filterAreas = areas.filter(val => val.checked === true);
    console.log(filterAreas);
    this.store$.dispatch(push_teacher_search_area(filterAreas));
  }

  ngOnInit() {
  }

}
