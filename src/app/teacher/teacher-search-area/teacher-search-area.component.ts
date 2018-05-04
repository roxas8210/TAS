import { Component, OnInit } from '@angular/core';
import { subject } from '../../checkbox-data/subject.data';
import { PostToTagsService } from '../../service/post-to-tags.service';
import { area } from '../../checkbox-data/area.data';

@Component({
  selector: 'app-teacher-search-area',
  templateUrl: './teacher-search-area.component.html',
  styleUrls: ['./teacher-search-area.component.less']
})
export class TeacherSearchAreaComponent implements OnInit {

  areaArray = area;

  splitArray = [];

  constructor(private tagsService: PostToTagsService) { }

  postArea(areas) {
    const filterAreas = areas.filter(val => val.checked === true);
    console.log(filterAreas);
    this.tagsService.setTags({ type: 'area', payload: filterAreas });
  }

  ngOnInit() {
  }

}
