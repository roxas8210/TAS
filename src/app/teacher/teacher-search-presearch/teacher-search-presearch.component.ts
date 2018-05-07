import { Component, OnInit } from '@angular/core';
import { PostToTagsService } from '../../service/post-to-tags.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { TagsState } from '../../domain/tags_state.model';

@Component({
  selector: 'app-teacher-search-presearch',
  templateUrl: './teacher-search-presearch.component.html',
  styleUrls: ['./teacher-search-presearch.component.less']
})
export class TeacherSearchPresearchComponent implements OnInit {

  // tags = [
  //   {
  //     color: '#646464',
  //     data: []
  //   },
  //   {
  //     color: '#ed2445',
  //     data: []
  //   },
  //   {
  //     color: '#ed8824',
  //     data: []
  //   },
  //   {
  //     // education-middle
  //     color: '#de21de',
  //     data: []
  //   }, {
  //     // education-history
  //     color: '#de21de',
  //     data: []
  //   }, {
  //     // music
  //     color: '#1fd397',
  //     data: []
  //   },
  //   {
  //     color: '#1ab31a',
  //     data: []
  //   },
  //   {
  //     color: '#2399ed',
  //     data: []
  //   },
  //   {
  //     color: '#1fd0d0',
  //     data: []
  //   },
  //   {
  //     color: '#6623ed',
  //     data: []
  //   }, {
  //     // zodiac
  //     color: '#646464',
  //     data: []
  //   }
  // ];

  tags: Observable<TagsState>;

  constructor(
    private store$: Store<any>,
    private tagsService: PostToTagsService) {}

  ngOnInit() {

    this.tags = this.store$.select('TeacherSearchTagsReducer');
    // this.tagsService.getTags().subscribe((val: {type: string, payload: any}) => {
    //   switch (val.type) {
    //     case 'basic':
    //       const basic = {
    //         type: 'basic',
    //         data: val.payload
    //       };
    //       this.tags[0].data = val.payload;
    //       console.log('basic', this.tags);
    //       break;
    //     case 'subject':
    //       const subject = {
    //         type: 'subject',
    //         data: val.payload
    //       };
    //       this.tags[1].data = val.payload;
    //       console.log('subject', this.tags);
    //       break;
    //     case 'area':
    //       const area = {
    //         type: 'area',
    //         data: val.payload
    //       };
    //       this.tags[2].data = val.payload;
    //       console.log('area', this.tags);
    //       break;
    //     case 'education-middle':
    //       const middle = {
    //         type: 'education-middle',
    //         data: val.payload
    //       };
    //       this.tags[3].data = val.payload;
    //       console.log('education-middle', this.tags);
    //       break;
    //     case 'education-history':
    //       this.tags[4].data = val.payload;
    //       console.log('education-history', this.tags);
    //       break;
    //     case 'music':
    //       this.tags[5].data = val.payload;
    //       console.log('music', this.tags);
    //       break;
    //     case 'info':
    //       this.tags[6].data = val.payload;
    //       break;
    //     case 'profession':
    //       this.tags[7].data = val.payload;
    //       break;
    //     case 'other':
    //       this.tags[8].data = val.payload;
    //       break;
    //     case 'zodiac':
    //       this.tags[10].data = val.payload;
    //       break;
    //     default:
    //       break;
    //   }
    // });

  }

}
