import { Component, OnInit } from '@angular/core';
import { district } from '../../option-data/district.data';
import { TabbarService } from '../../service/tabbar.service';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { TeacherSearchComponent } from '../teacher-search/teacher-search.component';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  // 地區選項值
  districtSelectedOption;

  // 地區選項
  districtOptions = district;

  // 快速搜索內容，雙向數據綁定
  quickSearchValue;

  // 屏幕默認寬度，在組件初始化的時候根據當前屏幕寬度而改變
  viewPortWidth = 1440;

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

  constructor(
    private router: Router,
    private tabbarService: TabbarService,
    private modalService: NzModalService
  ) { }

  getDetails(id) {
    console.log(id);
    this.router.navigate(['/index/user/teacher/details', { id: id }]);
  }

  searchTeacher() {
    const that = this;
    const subscribe = this.modalService.open({
      title: '搜索導師信息',
      content: TeacherSearchComponent,
      width: that.viewPortWidth,
      okText: '搜索',
      footer: false,
      onOk() {
        console.log('提交搜索導師');
      },
      onCancel() {
        console.log('取消搜索導師');
      }
    });
    subscribe.subscribe(result => {
      console.log(result);
    });
    // this.router.navigate(['/index/user/teacher/search']);
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

    // 根據屏幕寬度改變搜索彈出框的寬度
    switch (window.innerWidth) {
      case 1024:
        this.viewPortWidth = 1000;
        break;
      default:
        this.viewPortWidth = 1200;
        break;
    }
    console.log(this.viewPortWidth);
  }

}
