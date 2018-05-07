import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { push_teacher_search_music } from '../../actions/teacher-search/teacher-search-tags.action';

@Component({
  selector: 'app-teacher-search-music',
  templateUrl: './teacher-search-music.component.html',
  styleUrls: ['./teacher-search-music.component.less']
})
export class TeacherSearchMusicComponent implements OnInit {

  levelSelect;

  levelOptions = [{
    label: '一级',
    value: '一级'
  }, {
    label: '二级',
    value: '二级'
  }];

  musicList = [{
    id: 0,
    checkValue: '',
    selectValue: '',
    text: '钢琴',
    bak: '钢琴',
    status: false
  }, {
    id: 1,
    checkValue: '',
    selectValue: '',
    text: '琵琶',
    bak: '琵琶',
    status: false
  }];

  constructor(private store$: Store<any>) { }

  modelChange(val) {
    if (this.musicList[val].status) {
      if (this.musicList[val].selectValue) {
        this.musicList[val].text = this.musicList[val].bak + this.musicList[val].selectValue;
        const obj = this.musicList.filter(v => v.status === true);
        console.log(obj);
        this.store$.dispatch(push_teacher_search_music(obj));
      }
    } else {
      this.musicList[val].status = false;
    }
  }

  ngOnInit() {
  }

}
