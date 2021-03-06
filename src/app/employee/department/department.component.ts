import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TabbarService } from '../../service/tabbar.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.less']
})
export class DepartmentComponent implements OnInit {

  pageForm: FormGroup;

  // 頁面設置類型數據
  options = [{
    label: '家長列表',
    value: 1
  }];

  // 頁面設置左側菜單數據
  menu = [{
    'id': 2,
    'title': '香港',
    'url': '/',
    'switchStatus': false,
    'subMenu': [{
      'id': 11,
      'title': '業務部',
      'url': '/',
      'subMenu': [{
        'id': 111,
        'title': 'TEAM A',
        'url': '/'
      }, {
        'id': 112,
        'title': 'TEAM B',
        'url': '/'
      }, {
        'id': 113,
        'title': 'TEAM C',
        'url': '/'
      }]
    }, {
      'id': 12,
      'title': '技術部',
      'url': '/'
    }, {
      'id': 13,
      'title': '行政部',
      'url': '/'
    }, {
      'id': 14,
      'title': '售後部',
      'url': '/'
    }]
  }, {
    'id': 1,
    'title': '江門',
    'url': '/',
    'switchStatus': false,
    'subMenu': [{
      'id': 71,
      'title': '業務部',
      'url': '/index/system/setting'
    }, {
      'id': 72,
      'title': '技術部',
      'url': '/index/system/page'
    }, {
      'id': 71,
      'title': '行政部',
      'url': '/index/system/setting'
    }, {
      'id': 72,
      'title': '售後部',
      'url': '/index/system/page'
    }]
  }];

  // 選中欄目的id，目標為span元素
  selectedMenuId;

  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private fb: FormBuilder,
    private tabbarService: TabbarService
  ) {
    this.pageForm = this.fb.group({
      name: ['', Validators.required],
      type: [1, Validators.required],
      url: ['', Validators.required],
      orderBy: ['', Validators.required]
    });
   }

  // 點擊左側菜單觸發設置函數
  goSetting(id) {
    if (this.selectedMenuId) {
      const preElement = this.el.nativeElement.querySelector(`#menu${this.selectedMenuId}`);
      this.rd.setStyle(preElement, 'color', 'rgba(0, 0, 0, 0.65)');
      const element = this.el.nativeElement.querySelector(`#menu${id}`);
      this.rd.setStyle(element, 'color', '#2399ed');
      this.selectedMenuId = id;
    } else {
      const element = this.el.nativeElement.querySelector(`#menu${id}`);
      this.rd.setStyle(element, 'color', '#2399ed');
      this.selectedMenuId = id;
    }
  }

  // 展示子菜單函數
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
      'id': 82,
      'title': '部門列表',
      'url': '/index/employee/department',
      'activeStatus': true
    };
    this.tabbarService.setTabbar(page);
  }

}
