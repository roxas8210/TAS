import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TabbarService } from '../../service/tabbar.service';

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
      name: '客戶列表',
      active: false
    }, {
      name: '導師列表',
      active: false
    }, {
      name: '黑名單',
      active: false
    }]
  }, {
    name: '個案管理',
    active: false,
    children: [{
      name: '個案跟進',
      active: false
    }]
    }, {
    name: '行政管理',
    active: false
  }, {
    name: '網站管理',
    active: false
  }, {
    name: '相關報告',
    active: false
  }, {
    name: '系統管理',
    active: false,
    children: [{
      name: '系統設置',
      active: false
    }, {
      name: '頁面設置',
      active: false
    }]
  }, {
    name: '員工管理',
    active: false,
    children: [{
      name: '部門列表',
      active: false
    }, {
      name: '員工列表',
      active: false
    }, {
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

  authForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private tabbarService: TabbarService
  ) { }

  selectPeople(id) {
    console.log(id);
    // this.menu[0].children[1].children.filter(val => val.id)

  }

  ngOnInit() {
    this.authForm = this.fb.group({
      company: [false],
      group: [false],
      person: [false],
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
