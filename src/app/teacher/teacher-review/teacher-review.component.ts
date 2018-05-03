import { Component, OnInit } from '@angular/core';
import { district } from '../../option-data/district.data';
import { TabbarService } from '../../service/tabbar.service';

@Component({
  selector: 'app-teacher-review',
  templateUrl: './teacher-review.component.html',
  styleUrls: ['./teacher-review.component.css']
})
export class TeacherReviewComponent implements OnInit {

  districtSelectedOption;

  districtOptions = district;

  quickSearchValue;

  // 待審核導師列表
  teacherList = [{
    id: 1,
    no: '15432',
    name: '李先生',
    sex: '男',
    phone: '41525486',
    education: '小學',
    profession: '學生',
    editTime: '2018-04-27 15:52:13',
    livingArea: '尖沙咀',
    latestCase: 'A999999',
    status: '成功個案'
  }, {
    id: 2,
    no: '15432',
    name: '李先生',
    sex: '男',
    phone: '41525486',
    education: '小學',
    profession: '學生',
    editTime: '2018-04-27 15:52:13',
    livingArea: '尖沙咀',
    latestCase: 'A999999',
    status: '成功個案'
  }, {
    id: 3,
    no: '15432',
    name: '李先生',
    sex: '男',
    phone: '41525486',
    education: '小學',
    profession: '學生',
    editTime: '2018-04-27 15:52:13',
    livingArea: '尖沙咀',
    latestCase: 'A999999',
    status: '成功個案'
  }, {
    id: 4,
    no: '15432',
    name: '李先生',
    sex: '男',
    phone: '41525486',
    education: '小學',
    profession: '學生',
    editTime: '2018-04-27 15:52:13',
    livingArea: '尖沙咀',
    latestCase: 'A999999',
    status: '成功個案'
  }, {
    id: 5,
    no: '15432',
    name: '李先生',
    sex: '男',
    phone: '41525486',
    education: '小學',
    profession: '學生',
    editTime: '2018-04-27 15:52:13',
    livingArea: '尖沙咀',
    latestCase: 'A999999',
    status: '成功個案'
  }, {
    id: 6,
    no: '15432',
    name: '李先生',
    sex: '男',
    phone: '41525486',
    education: '小學',
    profession: '學生',
    editTime: '2018-04-27 15:52:13',
    livingArea: '尖沙咀',
    latestCase: 'A999999',
    status: '成功個案'
  }, {
    id: 7,
    no: '15432',
    name: '李先生',
    sex: '男',
    phone: '41525486',
    education: '小學',
    profession: '學生',
    editTime: '2018-04-27 15:52:13',
    livingArea: '尖沙咀',
    latestCase: 'A999999',
    status: '成功個案'
  }, {
    id: 8,
    no: '15432',
    name: '李先生',
    sex: '男',
    phone: '41525486',
    education: '小學',
    profession: '學生',
    editTime: '2018-04-27 15:52:13',
    livingArea: '尖沙咀',
    latestCase: 'A999999',
    status: '成功個案'
  }];

  searchTeacher() {
  }

  quickSearch(e) {
    console.log('開始快速搜索', e);
  }

  constructor(private tabbarService: TabbarService) { }

  ngOnInit() {
    const page = {
      'id': 23,
      'title': '導師審核',
      'url': '/index/user/teacher/review',
      'activeStatus': true
    };
    this.tabbarService.setTabbar(page);
    this.districtSelectedOption = this.districtOptions[0];
  }

}
