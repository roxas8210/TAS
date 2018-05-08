import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../service/title.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  // 左側菜單欄數據
  menu = [{
    'title': '首頁',
    'icon': 'home',
    'url': '/'
  }, {
    'title': '用戶管理',
    'icon': 'appstore',
    'url': '/',
    'subMenu': [{
      'title': '客戶列表',
      'icon': 'calendar',
      'url': '/index/user/client'
    }, {
      'title': '導師列表',
      'icon': 'user',
      'url': '/index/user/teacher'
    }, {
      'title': '黑名單',
      'icon': 'dislike',
      'url': '/index/user/blacklist'
    }]
  }, {
    'title': '個案管理',
    'icon': 'calendar',
    'url': '/',
    'subMenu': [{
      'title': '個案跟進',
      'icon': 'calendar',
      'url': '/index/case/follow'
    }]
  }, {
    'title': '行政管理',
    'icon': 'edit',
    'url': '/'
  }, {
    'title': '網站管理',
    'icon': 'logout',
    'url': '/'
  }, {
    'title': '相關報告',
    'icon': 'calendar',
    'url': '/'
  }, {
    'title': '系統管理',
    'icon': 'system',
    'url': '/',
    'subMenu': [{
      'title': '系統設置',
      'icon': 'system',
      'url': '/index/system/setting'
    }, {
      'title': '頁面設置',
      'icon': 'page',
      'url': '/index/system/page'
    }]
  }, {
    'title': '員工管理',
    'url': '/',
    'subMenu': [{
      'title': '部門列表',
      'url': '/index/employee/department'
    }, {
      'title': '員工列表',
      'url': '/index/employee/list'
    }, {
      'title': '權限設置',
      'url': '/index/employee/auth'
    }]
  }];

  title = '首頁';

  constructor() {
  }

  ngOnInit() {
  }

}
