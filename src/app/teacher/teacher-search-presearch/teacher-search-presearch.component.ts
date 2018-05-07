import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { TagsState } from '../../domain/tags_state.model';

@Component({
  selector: 'app-teacher-search-presearch',
  templateUrl: './teacher-search-presearch.component.html',
  styleUrls: ['./teacher-search-presearch.component.less']
})
export class TeacherSearchPresearchComponent implements OnInit {

  tags: Observable<TagsState>;

  constructor(private store$: Store<any>) {}

  ngOnInit() {

    this.tags = this.store$.select('TeacherSearchTagsReducer');
  }

}
