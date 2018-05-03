import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-search-music',
  templateUrl: './teacher-search-music.component.html',
  styleUrls: ['./teacher-search-music.component.less']
})
export class TeacherSearchMusicComponent implements OnInit {

  levelSelect;

  levelOptions = [{
    label: '1',
    value: '1'
  }, {
    label: '2',
    value: '2'
  }];

  constructor() { }

  ngOnInit() {
  }

}
