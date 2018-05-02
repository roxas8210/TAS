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
      'title': '導師審核',
      'icon': 'safety',
      'url': '/'
    }, {
      'title': '黑名單',
      'icon': 'dislike',
      'url': '/'
    }]
  }, {
    'title': '個案管理',
    'icon': 'calendar',
    'url': '/'
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
  }];

  title = '首頁';

  constructor() {
  }

  ngOnInit() {
  }

}
