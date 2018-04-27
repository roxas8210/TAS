import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TabbarService } from '../../service/tabbar.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  pageForm: FormGroup;

  options = [{
    label: '家長列表',
    value: 1
  }];

  menu = [{
    'id': 2,
    'title': '用戶管理',
    'url': '/',
    'switchStatus': false,
    'subMenu': [{
      'id': 11,
      'title': '家長列表',
      'url': '/'
    }, {
      'id': 12,
      'title': '導師列表',
      'url': '/'
    }, {
      'id': 13,
      'title': '導師審核',
      'url': '/'
    }, {
      'id': 14,
      'title': '黑名單',
      'url': '/'
    }]
  }, {
    'id': 3,
    'title': '個案管理',
    'url': '/',
    'switchStatus': false
  }, {
    'id': 4,
    'title': '行政管理',
    'url': '/',
    'switchStatus': false
  }, {
    'id': 5,
    'title': '網站管理',
    'url': '/',
    'switchStatus': false
  }, {
    'id': 6,
    'title': '相關報告',
    'url': '/',
    'switchStatus': false
  }, {
    'id': 7,
    'title': '系統管理',
    'url': '/',
    'switchStatus': false,
    'subMenu': [{
      'id': 71,
      'title': '系統設置',
      'url': '/index/system/setting'
    }, {
      'id': 72,
      'title': '頁面設置',
      'url': '/index/system/page'
    }]
  }];

  constructor(private fb: FormBuilder, private tabbarService: TabbarService) {
    this.pageForm = this.fb.group({
      name: ['', Validators.required],
      type: [1, Validators.required],
      url: ['', Validators.required],
      orderBy: ['', Validators.required]
    });
   }

   goSetting(id) {
     console.log(id);
   }

   showSubList(id) {
    //  console.log(`show submenu:${id}`);
    this.menu.map((element, index) => {
      if (element.id === id) {
        element.switchStatus = !element.switchStatus;
      }
    });
   }

  ngOnInit() {
    const page = {
      'id': 72,
      'title': '頁面設置',
      'url': '/index/system/page',
      'activeStatus': true
    };
    this.tabbarService.setTabbar(page);
  }

}
