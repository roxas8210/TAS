import { Component, OnInit } from '@angular/core';
import { district } from '../../option-data/district.data';
import { TabbarService } from '../../service/tabbar.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  districtSelectedOption;

  districtOptions = district;

  quickSearchValue;

  teacherList = [{
    id: 1,
    no: '15432',
    name: '李先生',
    updateTime: '2018-04-27 15:52:13',
    phone: '41525486',
    email: 'mario.lee@hkta.edu.hk',
    timeInterval: '9：30-18：30',
    livingArea: '尖沙咀',
    latestCase: 'A999999',
    caseStatus: '成功個案'
  }, {
    id: 2,
    no: '15432',
    name: '李先生',
    updateTime: '2018-04-27 15:52:13',
    phone: '41525486',
    email: 'mario.lee@hkta.edu.hk',
    timeInterval: '9：30-18：30',
    livingArea: '尖沙咀',
    latestCase: 'A999999',
    caseStatus: '成功個案'
  }, {
    id: 3,
    no: '15432',
    name: '李先生',
    updateTime: '2018-04-27 15:52:13',
    phone: '41525486',
    email: 'mario.lee@hkta.edu.hk',
    timeInterval: '9：30-18：30',
    livingArea: '尖沙咀',
    latestCase: 'A999999',
    caseStatus: '成功個案'
  }, {
    id: 4,
    no: '15432',
    name: '李先生',
    updateTime: '2018-04-27 15:52:13',
    phone: '41525486',
    email: 'mario.lee@hkta.edu.hk',
    timeInterval: '9：30-18：30',
    livingArea: '尖沙咀',
    latestCase: 'A999999',
    caseStatus: '成功個案'
  }, {
    id: 5,
    no: '15432',
    name: '李先生',
    updateTime: '2018-04-27 15:52:13',
    phone: '41525486',
    email: 'mario.lee@hkta.edu.hk',
    timeInterval: '9：30-18：30',
    livingArea: '尖沙咀',
    latestCase: 'A999999',
    caseStatus: '成功個案'
  }, {
    id: 6,
    no: '15432',
    name: '李先生',
    updateTime: '2018-04-27 15:52:13',
    phone: '41525486',
    email: 'mario.lee@hkta.edu.hk',
    timeInterval: '9：30-18：30',
    livingArea: '尖沙咀',
    latestCase: 'A999999',
    caseStatus: '成功個案'
  }, {
    id: 7,
    no: '15432',
    name: '李先生',
    updateTime: '2018-04-27 15:52:13',
    phone: '41525486',
    email: 'mario.lee@hkta.edu.hk',
    timeInterval: '9：30-18：30',
    livingArea: '尖沙咀',
    latestCase: 'A999999',
    caseStatus: '成功個案'
  }, {
    id: 8,
    no: '15432',
    name: '李先生',
    updateTime: '2018-04-27 15:52:13',
    phone: '41525486',
    email: 'mario.lee@hkta.edu.hk',
    timeInterval: '9：30-18：30',
    livingArea: '尖沙咀',
    latestCase: 'A999999',
    caseStatus: '成功個案'
  }, {
    id: 9,
    no: '15432',
    name: '李先生',
    updateTime: '2018-04-27 15:52:13',
    phone: '41525486',
    email: 'mario.lee@hkta.edu.hk',
    timeInterval: '9：30-18：30',
    livingArea: '尖沙咀',
    latestCase: 'A999999',
    caseStatus: '成功個案'
  }, {
    id: 10,
    no: '15432',
    name: '李先生',
    updateTime: '2018-04-27 15:52:13',
    phone: '41525486',
    email: 'mario.lee@hkta.edu.hk',
    timeInterval: '9：30-18：30',
    livingArea: '尖沙咀',
    latestCase: 'A999999',
    caseStatus: '成功個案'
  }, {
    id: 11,
    no: '15432',
    name: '李先生',
    updateTime: '2018-04-27 15:52:13',
    phone: '41525486',
    email: 'mario.lee@hkta.edu.hk',
    timeInterval: '9：30-18：30',
    livingArea: '尖沙咀',
    latestCase: 'A999999',
    caseStatus: '成功個案'
  }, {
    id: 12,
    no: '15432',
    name: '李先生',
    updateTime: '2018-04-27 15:52:13',
    phone: '41525486',
    email: 'mario.lee@hkta.edu.hk',
    timeInterval: '9：30-18：30',
    livingArea: '尖沙咀',
    latestCase: 'A999999',
    caseStatus: '成功個案'
  }, {
    id: 13,
    no: '15432',
    name: '李先生',
    updateTime: '2018-04-27 15:52:13',
    phone: '41525486',
    email: 'mario.lee@hkta.edu.hk',
    timeInterval: '9：30-18：30',
    livingArea: '尖沙咀',
    latestCase: 'A999999',
    caseStatus: '成功個案'
  }, {
    id: 14,
    no: '15432',
    name: '李先生',
    updateTime: '2018-04-27 15:52:13',
    phone: '41525486',
    email: 'mario.lee@hkta.edu.hk',
    timeInterval: '9：30-18：30',
    livingArea: '尖沙咀',
    latestCase: 'A999999',
    caseStatus: '成功個案'
  }, {
    id: 15,
    no: '15432',
    name: '李先生',
    updateTime: '2018-04-27 15:52:13',
    phone: '41525486',
    email: 'mario.lee@hkta.edu.hk',
    timeInterval: '9：30-18：30',
    livingArea: '尖沙咀',
    latestCase: 'A999999',
    caseStatus: '成功個案'
  }, {
    id: 16,
    no: '15432',
    name: '李先生',
    updateTime: '2018-04-27 15:52:13',
    phone: '41525486',
    email: 'mario.lee@hkta.edu.hk',
    timeInterval: '9：30-18：30',
    livingArea: '尖沙咀',
    latestCase: 'A999999',
    caseStatus: '成功個案'
  }];

  constructor(private tabbarService: TabbarService) { }

  searchTeacher() {
  }

  quickSearch(e) {
    console.log('開始快速搜索', e);
  }

  ngOnInit() {
    const page = {
      'id': 22,
      'title': '導師列表',
      'url': '/index/user/teacher',
      'activeStatus': true
    };
    this.tabbarService.setTabbar(page);
    this.districtSelectedOption = this.districtOptions[0];
  }

}
