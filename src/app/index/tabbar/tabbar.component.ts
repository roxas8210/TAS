import { Component, OnInit } from '@angular/core';
import { Tabbar } from '../../domain/tabbar.model';
import { TabbarService } from '../../service/tabbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.css']
})
export class TabbarComponent implements OnInit {

  // 頁面標籤數據模型
  menu = [{
    'title': '首頁',
    'url': '/',
    'activeStatus': false,
    'id': 1
  }, {
    'title': '用戶管理',
    'url': '/',
    'activeStatus': false,
    'id': 2,
    'subMenu': [{
      'title': '家長列表',
      'url': '/',
      'activeStatus': false,
      'id': 21
    }, {
      'title': '導師列表',
      'url': '/',
      'activeStatus': false,
      'id': 22
    }, {
      'title': '導師審核',
      'url': '/',
      'activeStatus': false,
      'id': 23
    }, {
      'title': '黑名單',
      'url': '/',
      'activeStatus': false,
      'id': 24
    }]
  }, {
    'title': '個案管理',
    'url': '/',
    'activeStatus': false,
    'id': 3
  }, {
    'title': '行政管理',
    'url': '/',
    'activeStatus': false,
    'id': 4
  }, {
    'title': '網站管理',
    'url': '/',
    'activeStatus': false,
    'id': 5
  }, {
    'title': '相關報告',
    'url': '/',
    'activeStatus': false,
    'id': 6
  }, {
    'title': '系統管理',
    'url': '/',
    'activeStatus': false,
    'id': 7,
    'subMenu': [{
      'title': '系統設置',
      'url': '/index/system/setting',
      'activeStatus': false,
      'id': 71
    }, {
      'title': '頁面設置',
      'url': '/index/system/page',
      'activeStatus': false,
      'id': 72
    }]
  }];

  // 頁面數據棧原始數據
  tabStack: Tabbar[] = [{
    'id': 1,
    'title': '首頁',
    'url': '/',
    'activeStatus': true
  }];

  constructor(private tabbarService: TabbarService, private router: Router) { }

  // 關閉標籤頁
  closeTab(id) {
    this.tabStack.map((element, index) => {
      if (element.id === id) {
        // 从页面栈中删除
        this.tabStack.splice(index, 1);
        // 当前标签不是激活状态时
        if (element.activeStatus === true) {
          const prePage = this.tabStack[index - 1];
          this.tabStack[index - 1].activeStatus = true;
          this.router.navigate([prePage.url]);
        }
      }
    });
  }

  ngOnInit() {
    this.tabbarService.getTabbar().subscribe((val: Tabbar) => {
      const cpStack: Tabbar[] = this.tabStack.filter(v => v.id === val.id);
      // 栈中没有相同路由
      if (cpStack.length === 0) {
        this.tabStack.map((element, index) => {
          element.activeStatus = false;
        });
        this.tabStack.push(val);
      } else {
        this.tabStack.map((element, index) => {
          element.activeStatus = false;
          if (element.id === cpStack[0].id) {
            element.activeStatus = true;
          }
        });
      }
    });
  }

}
