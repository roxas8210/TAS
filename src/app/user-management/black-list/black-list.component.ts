import { Component, OnInit } from '@angular/core';
import { district } from '../../option-data/district.data';
import { TabbarService } from '../../service/tabbar.service';

@Component({
  selector: 'app-black-list',
  templateUrl: './black-list.component.html',
  styleUrls: ['./black-list.component.less']
})
export class BlackListComponent implements OnInit {

  districtSelectedOption;

  districtOptions = district;

  quickSearchValue;

  // 待審核導師列表
  teacherList = [{
    id: 1,
    no: '15432',
    name: '李先生',
    phone: '41525486',
    latestCase: 'A999999',
    reason: '唔比錢',
    date: '2018-04-27 15:52:13',
    sales: 'xxx'
  }, {
    id: 2,
    no: '15432',
    name: '李先生',
    phone: '41525486',
    latestCase: 'A999999',
    reason: '唔比錢',
    date: '2018-04-27 15:52:13',
    sales: 'xxx'
  }, {
    id: 3,
    no: '15432',
    name: '李先生',
    phone: '41525486',
    latestCase: 'A999999',
    reason: '唔比錢',
    date: '2018-04-27 15:52:13',
    sales: 'xxx'
  }];

  searchTeacher() {
  }

  quickSearch(e) {
    console.log('開始快速搜索', e);
  }

  constructor(private tabbarService: TabbarService) { }

  ngOnInit() {
    const page = {
      'id': 24,
      'title': '黑名單',
      'url': '/index/user/blacklist',
      'activeStatus': true
    };
    this.tabbarService.setTabbar(page);
    this.districtSelectedOption = this.districtOptions[0];
  }

}
