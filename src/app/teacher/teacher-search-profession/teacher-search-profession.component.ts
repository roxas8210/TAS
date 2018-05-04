import { Component, OnInit } from '@angular/core';
import { PostToTagsService } from '../../service/post-to-tags.service';

@Component({
  selector: 'app-teacher-search-profession',
  templateUrl: './teacher-search-profession.component.html',
  styleUrls: ['./teacher-search-profession.component.less']
})
export class TeacherSearchProfessionComponent implements OnInit {

  levelOptions = [{
    label: '1',
    value: '1'
  }];

  professionList = [{
    id: 0,
    value: '',
    text: '現時職業',
    bak: '現時職業',
    status: false
  }, {
    id: 1,
    value: '',
    text: '工作經驗',
    bak: '工作經驗',
    status: false
  }, {
    id: 2,
    value: '',
    text: '過去工作資料（1）',
    bak: '過去工作資料（1）',
    status: false
  }, {
    id: 3,
    value: '',
    text: '過去工作資料（2）',
    bak: '過去工作資料（2）',
    status: false
  }, {
    id: 4,
    value: '',
    text: '補習經驗及年資',
    bak: '補習經驗及年資',
    status: false
  }, {
    id: 5,
    value: '',
    text: '最高可補年級',
    bak: '最高可補年級',
    status: false
  }, {
    id: 6,
    value: '',
    text: '教育機構經驗',
    bak: '教育機構經驗',
    status: false
  }];

  constructor(private tagsService: PostToTagsService) { }

  modelChange(val) {
    if (this.professionList[val].text) {
      this.professionList[val].text = this.professionList[val].bak + this.professionList[val].value;
      this.professionList[val].status = true;
      const obj = this.professionList.filter(v => v.status === true);
      this.tagsService.setTags({ type: 'profession', payload: obj });
      console.log(obj);
    } else {
      this.professionList[val].status = false;
    }
  }

  ngOnInit() {
  }

}
