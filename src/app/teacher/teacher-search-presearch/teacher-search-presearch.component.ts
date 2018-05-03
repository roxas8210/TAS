import { Component, OnInit } from '@angular/core';
import { PostToTagsService } from '../../service/post-to-tags.service';

@Component({
  selector: 'app-teacher-search-presearch',
  templateUrl: './teacher-search-presearch.component.html',
  styleUrls: ['./teacher-search-presearch.component.less']
})
export class TeacherSearchPresearchComponent implements OnInit {

  tags = [
    {
      color: '#646464',
      data: []
    },
    {
      color: '#ed2445',
      data: []
    },
    {
      color: '#ed8824',
      data: []
    },
    {
      color: '#de21de',
      data: []
    },
    {
      color: '#1fd397',
      data: []
    },
    {
      color: '#1ab31a',
      data: []
    },
    {
      color: '#2399ed',
      data: []
    },
    {
      color: '#1fd0d0',
      data: []
    },
    {
      color: '#6623ed',
      data: []
    }
  ];

  constructor(private tagsService: PostToTagsService) { }

  ngOnInit() {
    this.tagsService.getTags().subscribe((val: {type: string, payload: any}) => {
      switch (val.type) {
        case 'subject':
          const subject = {
            type: 'subject',
            data: val.payload
          };
          this.tags[1].data = val.payload;
          console.log('subject', this.tags);
          break;
        default:
          break;
      }
    });

  }

}
