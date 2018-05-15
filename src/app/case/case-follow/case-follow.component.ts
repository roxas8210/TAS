import { Component, OnInit } from '@angular/core';
import { TabbarService } from '../../service/tabbar.service';
import { district } from '../../option-data/district.data';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HK2 } from '../../option-data/hongkong2.data';

@Component({
  selector: 'app-case-follow',
  templateUrl: './case-follow.component.html',
  styleUrls: ['./case-follow.component.less']
})
export class CaseFollowComponent implements OnInit {

  // 地區選擇（香港、江門）
  districtSelectedOption;

  districtOptions = district;

  // 地區選項，快速搜索欄
  areaOptions = HK2;

  currentPage = 1;

  quickSearch;

  tabs = [{
    name: 'Mario'
  }, {
    name: 'Anna'
  }, {
    name: 'Anne'
  }, {
    name: 'Peter'
  }, {
    name: 'Tom'
  }, {
    name: 'Jerry'
  }, {
    name: 'Anna'
  }, {
    name: 'Peter'
  }, {
    name: 'Tom'
  }, {
    name: 'Jerry'
  }];

  caseList = [{
    id: 1,
    no: '15432',
    caseStatus: '成功個案',
    caseType: '補習',
    area: '九龍',
    livingArea: '尖沙咀',
    subject: '數學（M1）',
    price: '166.7',
    teacher_sex: '女',
    regi_time: '2018-05-07 11：11：11',
    message: '無',
    dead_line: '2018-05-07',
    case_status: '完成',
    person: 'anna',
    auto_send: 'anna',
    ccvm: [{
      date: '2018-05-07 14:44:44',
      name: 'anna',
      content: 'CCVM'
    }, {
      date: '2018-05-07 14:44:44',
      name: 'anna',
      content: 'CCVM'
    }, {
      date: '2018-05-07 14:44:44',
      name: 'anna',
      content: 'CCVM'
    }]
  }, {
    id: 2,
    no: '15432',
    caseStatus: '成功個案',
    caseType: '補習',
    area: '九龍',
    livingArea: '尖沙咀',
    subject: '數學（M1）',
    price: '166.7',
    teacher_sex: '女',
    regi_time: '2018-05-07 11：11：11',
    message: '無',
    dead_line: '2018-05-07',
    case_status: '完成',
    person: 'anna',
    auto_send: 'anna',
    ccvm: [{
      date: '2018-05-07 14:44:44',
      name: 'anna',
      content: 'CCVM'
    }, {
      date: '2018-05-07 14:44:44',
      name: 'anna',
      content: 'CCVM'
    }, {
      date: '2018-05-07 14:44:44',
      name: 'anna',
      content: 'CCVM'
    }]
  }, {
    id: 3,
    no: '15432',
    caseStatus: '成功個案',
    caseType: '補習',
    area: '九龍',
    livingArea: '尖沙咀',
    subject: '數學（M1）',
    price: '166.7',
    teacher_sex: '女',
    regi_time: '2018-05-07 11：11：11',
    message: '無',
    dead_line: '2018-05-07',
    case_status: '完成',
    person: 'anna',
    auto_send: 'anna',
    ccvm: [{
      date: '2018-05-07 14:44:44',
      name: 'anna',
      content: 'CCVM'
    }, {
      date: '2018-05-07 14:44:44',
      name: 'anna',
      content: 'CCVM'
    }, {
      date: '2018-05-07 14:44:44',
      name: 'anna',
      content: 'CCVM'
    }]
  }];

  searchForm: FormGroup;

  typeOptions = [{
    label: '補習',
    value: 0
  }, {
    label: '音樂',
    value: 1
  }, {
    label: '會話',
    value: 2
  }, {
    label: '學校',
    value: 3
  }, {
    label: '其他',
    value: 4
  }];

  constructor(
    private tabbarService: TabbarService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.searchForm = this.fb.group({
      type: [''],
      status: [''],
      area: [''],
      sex: [''],
      price: ['']
    });
  }

  onSearch(event) {
    console.log(event);
  }

  getDetails(id) {
    this.router.navigate([`/index/case/follow/details/${id}`]);
  }

  ngOnInit() {
    const page = {
      'id': 35,
      'title': '個案跟進',
      'url': '/index/case/follow',
      'activeStatus': true
    };
    this.tabbarService.setTabbar(page);
    this.districtSelectedOption = this.districtOptions[0];
  }

}
