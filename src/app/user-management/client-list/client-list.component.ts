import { Component, OnInit } from '@angular/core';
import { TabbarService } from '../../service/tabbar.service';
import { Router } from '@angular/router';

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

  districtOptions = [{
    label: '香港',
    value: '1'
  }, {
    label: '江門',
    value: '2'
  }];

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

  constructor(private router: Router, private tabbarService: TabbarService) { }

  ngOnInit() {
    const page = {
      'id': 21,
      'title': '客戶列表',
      'url': '/index/user/client',
      'activeStatus': true
    };
    this.tabbarService.setTabbar(page);
  }

}
