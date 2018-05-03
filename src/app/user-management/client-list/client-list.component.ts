import { Component, OnInit } from '@angular/core';
import { TabbarService } from '../../service/tabbar.service';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { ClientAddComponent } from '../client-add/client-add.component';
import { ClientSearchComponent } from '../client-search/client-search.component';
import { district } from '../../option-data/district.data';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  selectedOption;

  options = [{
    label: '所有案例',
    value: '1'
  }, {
    label: '成功案例',
    value: '2'
  }, {
    label: '失敗案例',
    value: '3'
  }];

  districtSelectedOption;

  districtOptions = district;

  clientList = [{
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

  getDetails(id) {
    console.log(id);
    this.router.navigate(['/index/user/client/details', {id: id}]);
  }

  // 觸發新增客戶彈出層
  addClient() {
    const subscribe = this.modelService.open({
      title: '新增客戶信息',
      content: ClientAddComponent,
      width: 1000,
      onOk() {
        console.log('提交新增用戶');
      },
      onCancel() {
        console.log('取消新增用戶');
      }
    });
    subscribe.subscribe(result => {
      console.log(result);
    });
  }

  // 觸發搜索客戶彈出層
  searchClient() {
    const subscribe = this.modelService.open({
      title: '搜索客戶信息',
      content: ClientSearchComponent,
      width: 1000,
      okText: '搜索',
      onOk() {
        console.log('提交搜索用戶');
      },
      onCancel() {
        console.log('取消搜索用戶');
      }
    });
    subscribe.subscribe(result => {
      console.log(result);
    });
  }

  constructor(
    private router: Router,
    private tabbarService: TabbarService,
    private modelService: NzModalService
  ) { }

  ngOnInit() {
    const page = {
      'id': 21,
      'title': '客戶列表',
      'url': '/index/user/client',
      'activeStatus': true
    };
    this.tabbarService.setTabbar(page);
    this.districtSelectedOption = this.districtOptions[0];
  }

}
