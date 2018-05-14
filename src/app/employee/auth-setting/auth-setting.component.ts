import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TabbarService } from '../../service/tabbar.service';
import { Observable } from 'rxjs/observable';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-auth-setting',
  templateUrl: './auth-setting.component.html',
  styleUrls: ['./auth-setting.component.less']
})
export class AuthSettingComponent implements OnInit {

  menuItem: MenuItem[];

  menu = [{
    label: '總公司',
    items: [{
      label: '香港',
      items: [{
        label: '業務部',
        items: [{
          label: 'TEAM A',
          items: [{
            label: '组长'
          }, {
            label: '组员'
          }]
        }, {
          label: 'TEAM B'
        }]
      }, {
        label: '技術部',
        items: [{
          label: '主管'
        }, {
          label: '前端工程師'
        }, {
          label: 'UI設計師'
        }, {
          label: '開發工程師'
        }]
      }, {
        label: '行政部'
      }, {
        label: '售後部'
      }]
    }, {
      label: '江門',
      items: [{
        label: '業務部',
      }, {
        label: '技術部',
      }, {
        label: '行政部',
      }, {
        label: '售後部',
      }]
    }]
  }];

  pageMenu = [{
    id: '2',
    name: '用戶管理',
    active: false,
    children: [{
      id: '21',
      name: '客戶列表',
      active: false,
      auth: {
        query: [{
          name: '區域查詢',
          value: 1
        }, {
          name: '全地區查詢',
          value: 2
        }],
        operate: [{
          name: '新增用戶',
          value: false
        }]
      }
    }, {
      id: '22',
      name: '客戶詳情',
      active: false,
      auth: {
        query: [],
        operate: [{
          name: '編輯客戶信息',
          value: false
        }, {
          name: '重置客戶密碼',
          value: false
        }, {
          name: '更改客戶手機',
          value: false
        }, {
          name: '拉入黑名單',
          value: false
        }]
      }
    }, {
      id: '23',
      name: '導師列表',
      active: false,
      auth: {
        query: [{
          name: '區域查詢',
          value: 1
        }, {
          name: '全地區查詢',
          value: 2
        }],
        operate: []
      }
    }, {
      id: '24',
      name: '導師詳情',
      active: false,
      auth: {
        query: [],
        operate: [{
          name: '編輯導師信息',
          value: false
        }, {
          name: '審核該導師',
          value: false
        }, {
          name: '凍結該導師',
          value: false
        }, {
          name: '拉入黑名單',
          value: false
        }]
      }
    }]
  }, {
    id: '3',
    name: '個案管理',
    active: false,
    children: [{
      id: '31',
      name: '新增個案',
      active: false,
      auth: {
        query: [],
        operate: [{
          name: '新增',
          value: false
        }]
      }
    }, {
      id: '32',
      name: '快速搜索個案',
      active: false,
      auth: {
        query: [{
          name: '區域查詢',
          value: 1
        }, {
          name: '全地區查詢',
          value: 2
        }],
        operate: []
      }
    }, {
      id: '33',
      name: '自動分配個案',
      active: false,
      auth: {
        query: [{
          name: '區域查詢',
          value: 1
        }, {
          name: '全地區查詢',
          value: 2
        }],
        operate: []
      }
    }, {
      id: '34',
      name: '自選補習個案',
      active: false,
      auth: {
        query: [{
          name: '區域查詢',
          value: 1
        }, {
          name: '全地區查詢',
          value: 2
        }],
        operate: []
      }
    }, {
      id: '35',
      name: '個案跟進',
      active: false,
      auth: {
        query: [{
          name: '個人查詢',
          value: 1
        }, {
          name: '小組查詢',
          value: 2
        }, {
          name: '區域查詢',
          value: 3
        }, {
          name: '全地區查詢',
          value: 4
        }],
        operate: []
      }
    }, {
      id: '36',
      name: '延時審批',
      active: false,
      auth: {
        query: [{
          name: '小組查詢',
          value: 1
        }, {
          name: '區域查詢',
          value: 2
        }, {
          name: '全地區查詢',
          value: 3
        }],
        operate: [{
          name: '審核',
          value: false
        }]
      }
    }, {
      id: '37',
      name: '最近上課個案',
      active: false,
      auth: {
        query: [{
          name: '個人查詢',
          value: 1
        }, {
          name: '小組查詢',
          value: 2
        }, {
          name: '區域查詢',
          value: 3
        }, {
          name: '全地區查詢',
          value: 4
        }],
        operate: []
      }
    }, {
      id: '38',
      name: '成功個案匯總',
      active: false,
      auth: {
        query: [{
          name: '個人查詢',
          value: 1
        }, {
          name: '小組查詢',
          value: 2
        }, {
          name: '區域查詢',
          value: 3
        }, {
          name: '全地區查詢',
          value: 4
        }],
        operate: []
      }
    }, {
      id: '39',
      name: '個案異常提醒',
      active: false,
      auth: {
        query: [{
          name: '個人查詢',
          value: 1
        }, {
          name: '小組查詢',
          value: 2
        }, {
          name: '區域查詢',
          value: 3
        }, {
          name: '全地區查詢',
          value: 4
        }],
        operate: []
      }
    }, {
      id: '40',
      name: '個案詳情',
      active: false,
      auth: {
        query: [],
        operate: [{
          name: '編輯',
          value: false
        }, {
          name: '個案跟進',
          value: false
        }, {
          name: '延時審批',
          value: false
        }, {
          name: '黑名單',
          value: false
        }, {
          name: '個案備註',
          value: false
        }, {
          name: '重新發起個案',
          value: false
        }, {
          name: '個案轉移',
          value: false
        }, {
          name: '個案完結',
          value: false
        }, {
          name: '添加課款',
          value: false
        }]
      }
    }]
  }, {
    id: '4',
    name: '系統管理',
    active: false,
    children: [{
      id: '41',
      name: '系統設置',
      active: false,
      auth: {
        query: [{
          name: '區域查詢',
          value: 1
        }, {
          name: '全地區查詢',
          value: 2
        }],
        operate: [{
          name: '編輯',
          value: false
        }]
      }
    }, {
      id: '42',
      name: '頁面設置',
      active: false,
      auth: {
        query: [{
          name: '區域查詢',
          value: 1
        }, {
          name: '全地區查詢',
          value: 2
        }],
        operate: [{
          name: '編輯',
          value: false
        }]
      }
    }]
  }, {
    id: '5',
    name: '員工管理',
    active: false,
    children: [{
      id: '51',
      name: '部門列表',
      active: false,
      auth: {
        query: [{
          name: '區域查詢',
          value: 1
        }, {
          name: '全地區查詢',
          value: 2
        }],
        operate: [{
          name: '編輯',
          value: false
        }, {
          name: '新增',
          value: false
        }, {
          name: '刪除',
          value: false
        }]
      }
    }, {
      id: '52',
      name: '員工列表',
      active: false,
      auth: {
        query: [{
          name: '區域查詢',
          value: 1
        }, {
          name: '全地區查詢',
          value: 2
        }],
        operate: [{
          name: '編輯',
          value: false
        }, {
          name: '新增',
          value: false
        }]
      }
    }, {
      id: '53',
      name: '權限設置',
      active: false,
      auth: {
        query: [{
          name: '區域查詢',
          value: 1
        }, {
          name: '全地區查詢',
          value: 2
        }],
        operate: [{
          name: '編輯',
          value: false
        }]
      }
    }]
  }];

  clientList = {
    query: [{
      name: '區域查詢  ',
      value: 1
    }, {
      name: '全地區查詢',
      value: 2
    }],
    operate: [{
      name: '新增用戶',
      value: false
    }]
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

  // 選擇員工的名字
  selectedEmployee;

  // 選擇設置頁面的名字
  selectedPage;

  // 選擇員工的ID
  selectedEmployeeId = '';

  // 選擇設置頁面的ID
  selectedPageId = '';

  // 訪問權限checkbox
  authAccess = false;

  // 查詢權限radio，根據不同的頁面設置
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

  selectPage(id, name, parentId) {
    this.selectedPage = `${name}`;
    this.changePageColor(`pageId${id}`);

    const selectedMenu = this.pageMenu.filter(val => val.id === parentId);
    const selectedMenuList = selectedMenu[0].children.filter(v => v.id === id);
    if (selectedMenuList[0].auth && selectedMenuList[0].auth.query) {
      if (selectedMenuList[0].auth.query.length > 0) {
        this.authQueryList = [...(selectedMenuList[0].auth.query)];
      }
    } else {
      this.authQueryList = [];
    }

    if (selectedMenuList[0].auth && selectedMenuList[0].auth.operate.length > 0) {
      this.authOperateList = [...selectedMenuList[0].auth.operate];
    } else {
      this.authOperateList = [];
    }

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

  // 遞歸為menu添加command屬性
  addFunc(menu) {
    for (const i in menu) {
      if (menu[i]) {
        // break;
        menu[i].command = (event) => {
          console.log(event);
          this.selectedEmployee = event.item.label;
        };
        this.addFunc(menu[i].items);
      }
    }
  }

  ngOnInit() {

    this.addFunc(this.menu);
    this.menuItem = this.menu;
    console.log('测试结果', this.menuItem);

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
