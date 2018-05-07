import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TabbarService } from '../../service/tabbar.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.less']
})
export class EmployeeListComponent implements OnInit {

  pageForm: FormGroup;

  // 頁面設置類型數據
  options = [{
    label: '家長列表',
    value: 1
  }];

  // 頁面設置左側菜單數據
  menu = [{
    'id': 0,
    'title': '香港',
    'url': '/',
    'switchStatus': false,
    'subMenu': [{
      'id': 11,
      'title': '業務部',
      'url': '/',
      'subMenu': [{
        'id': 11,
        'title': 'TEAM A',
        'url': '/'
      }, {
        'id': 11,
        'title': 'TEAM B',
        'url': '/'
      }, {
        'id': 11,
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


  levelOptions = [{
    label: '1',
    value: '1'
  }];

  professionList = [{
    id: 0,
    value: '',
    text: '現時職業',
    bak: '現時職業',
    status: false
  }, {
    id: 1,
    value: '',
    text: '工作經驗',
    bak: '工作經驗',
    status: false
  }, {
    id: 2,
    value: '',
    text: '過去工作資料（1）',
    bak: '過去工作資料（1）',
    status: false
  }, {
    id: 3,
    value: '',
    text: '過去工作資料（2）',
    bak: '過去工作資料（2）',
    status: false
  }, {
    id: 4,
    value: '',
    text: '補習經驗及年資',
    bak: '補習經驗及年資',
    status: false
  }, {
    id: 5,
    value: '',
    text: '最高可補年級',
    bak: '最高可補年級',
    status: false
  }, {
    id: 6,
    value: '',
    text: '教育機構經驗',
    bak: '教育機構經驗',
    status: false
  }];


  constructor(private fb: FormBuilder, private tabbarService: TabbarService) {
    this.pageForm = this.fb.group({
      name: ['', Validators.required],
      type: [1, Validators.required],
      url: ['', Validators.required],
      orderBy: ['', Validators.required]
    });
  }

  // 點擊左側菜單觸發設置函數
  goSetting(id) {
    console.log(id);
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

  modelChange(test) {
    console.log('test');
  }

  ngOnInit() {
    const page = {
      'id': 81,
      'title': '員工列表',
      'url': '/index/employee/list',
      'activeStatus': true
    };
    this.tabbarService.setTabbar(page);
  }

}
