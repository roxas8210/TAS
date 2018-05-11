import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TabbarService } from '../../service/tabbar.service';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-auth-setting',
  templateUrl: './auth-setting.component.html',
  styleUrls: ['./auth-setting.component.less']
})
export class AuthSettingComponent implements OnInit {

  menu = [{
    name: '總公司',
    active: true,
    children: [{
      name: '香港',
      active: false,
      children: [{
        name: '業務部',
        active: false,
        children: []
        // children: [{
        //   name: 'TEAM A',
        //   active: false,
        //   children: [{
        //     name: '组长',
        //     active: false
        //   }, {
        //     name: '组员',
        //     active: false
        //   }]
        // }, {
        //   name: 'TEAM B',
        //   active: false
        // }]
      }, {
        name: '技術部',
        active: true,
        children: [{
          id: 0,
          name: '主管',
          active: false,
          status: false,
          children: []
        }, {
          id: 1,
          name: '前端工程師',
          active: false,
          disabled: true
        }, {
          id: 2,
          name: 'UI設計師',
          active: false,
          disabled: true
        }, {
          id: 3,
          name: '開發工程師',
          active: false,
          disabled: true
        }]
      }, {
        name: '行政部',
        active: false,
        children: [],
        disabled: true
      }, {
        name: '售後部',
        active: false,
        children: [],
        disabled: true
      }]
    }, {
      name: '江門',
      active: false,
      children: [{
        name: '業務部',
        active: false,
        children: []
      }, {
        name: '技術部',
        active: false,
        children: []
      }, {
        name: '行政部',
        active: false,
        children: []
      }, {
        name: '售後部',
        active: false,
        children: []
      }]
    }]
  }];

  pageMenu = [{
    name: '用戶管理',
    active: false,
    children: [{
      id: '21',
      name: '客戶列表',
      active: false
    }, {
      id: '22',
      name: '導師列表',
      active: false
    }, {
      id: '23',
      name: '黑名單',
      active: false
    }, {
      id: '211',
      name: '客戶詳情',
      active: false
    }, {
      id: '221',
      name: '導師詳情',
      active: false
    }]
  }, {
    name: '個案管理',
    active: false,
    children: [{
      id: '31',
      name: '個案跟進',
      active: false
    }]
    }, {
    name: '行政管理',
    active: false,
    children: []
  }, {
    name: '網站管理',
    active: false,
    children: []
  }, {
    name: '相關報告',
    active: false,
    children: []
  }, {
    name: '系統管理',
    active: false,
    children: [{
      id: '71',
      name: '系統設置',
      active: false
    }, {
      id: '72',
      name: '頁面設置',
      active: false
    }]
  }, {
    name: '員工管理',
    active: false,
    children: [{
      id: '81',
      name: '部門列表',
      active: false
    }, {
      id: '82',
      name: '員工列表',
      active: false
    }, {
      id: '83',
      name: '權限設置',
      active: false
    }]
  }];

  queryAuth = [{
    label: '全司',
    value: '全司',
    checked: false
  }, {
    label: '小組',
    value: '小組',
    checked: false
  }, {
    label: '個人',
    value: '個人',
    checked: false
  }];

  operateAuth = [{
    label: '新增',
    value: '新增',
    checked: false
  }, {
    label: '刪除',
    value: '刪除',
    checked: false
  }, {
    label: '編輯',
    value: '編輯',
    checked: false
  }];

  clientList = {
    query: [{
      name: '區域查詢  ',
      value: 1
    }, {
      name: '全地區查詢',
      value: 2
    }],
    operate: [
      '新增用戶'
    ]
  };

  teacherList = {
    query: [{
      name: '區域查詢  ',
      value: 1
    }, {
      name: '全地區查詢',
      value: 2
    }]
  };

  authForm: FormGroup;

  selectedEmployee;

  selectedPage;

  selectedEmployeeId = '';

  selectedPageId = '';

  authQueryList = [];

  authOperateList = [];

  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private fb: FormBuilder,
    private tabbarService: TabbarService
  ) { }

  selectPeople(id, name) {
    this.selectedEmployee = `${name}`;
    this.changePeopleColor(`employeeId${id}`);
  }

  selectPage(id, name) {
    this.selectedPage = `${name}`;
    this.changePageColor(`pageId${id}`);
    switch (id) {
      case '21':
        this.authQueryList = this.clientList.query;
        this.authOperateList = this.clientList.operate;
        console.log(this.authQueryList);
        break;
      case '22':
        this.authQueryList = this.teacherList.query;
        break;
      default:
        this.authQueryList = [];
        this.authOperateList = [];
        break;
    }
    // if (id === '21') {
    //   this.authQueryList = this.clientList.query;
    //   this.authOperateList = this.clientList.operate;
    //   console.log(this.authQueryList);
    // }
    // if (id === '22') {
    //   this.authQueryList = this.teacherList.query;
    // } else {
    //   this.authQueryList = [];
    //   this.authOperateList = [];
    // }
  }

  // 選擇員工職位
  changePeopleColor(id) {
    if (this.selectedEmployeeId.length > 0) {
      const preEmployeeDom = this.el.nativeElement.querySelector(`#${this.selectedEmployeeId}`);
      const employeeDom = this.el.nativeElement.querySelector(`#${id}`);
      this.rd.setStyle(preEmployeeDom, 'color', 'rgba(0, 0, 0, 0.65)');
      this.rd.setStyle(employeeDom, 'color', '#2399ed');
      this.selectedEmployeeId = id;
    } else {
      const employeeDom = this.el.nativeElement.querySelector(`#${id}`);
      // employeeDom.style.color = '#2399ed';
      this.rd.setStyle(employeeDom, 'color', '#2399ed');
      this.selectedEmployeeId = id;
    }
  }

  // 選擇各級頁面
  changePageColor(id) {
    if (this.selectedPageId.length > 0) {
      const prePageDom = this.el.nativeElement.querySelector(`#${this.selectedPageId}`);
      const pageDom = this.el.nativeElement.querySelector(`#${id}`);
      this.rd.setStyle(prePageDom, 'color', 'rgba(0, 0, 0, 0.65)');
      this.rd.setStyle(pageDom, 'color', '#2399ed');
      this.selectedPageId = id;
    } else {
      const pageDom = this.el.nativeElement.querySelector(`#${id}`);
      // pageDom.style.color = '#2399ed';
      this.rd.setStyle(pageDom, 'color', '#2399ed');
      this.selectedPageId = id;
    }
  }

  ngOnInit() {
    this.authForm = this.fb.group({
      auth_rang: [false],
      add: [false],
      delete: [false],
      edit: [false],
    });
    const page = {
      'id': 83,
      'title': '權限設置',
      'url': '/index/employee/auth',
      'activeStatus': true
    };
    this.tabbarService.setTabbar(page);
  }

}
