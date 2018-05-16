import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-select-client',
  templateUrl: './case-select-client.component.html',
  styleUrls: ['./case-select-client.component.less']
})
export class CaseSelectClientComponent implements OnInit {

  quickSearch;

  parentList = [{
    selected: false,
    id: 1,
    parentNo: '15432',
    name: '李先生',
    phone: '41525486',
    contactTime: '9:30-18:30',
    livingArea: '尖沙咀',
    latestCase: 'A999999'
  }, {
    selected: false,
    id: 2,
    parentNo: '15432',
    name: '李先生',
    phone: '41525486',
    contactTime: '9:30-18:30',
    livingArea: '尖沙咀',
    latestCase: 'A999999'
  }, {
    selected: false,
    id: 3,
    parentNo: '15432',
    name: '李先生',
    phone: '41525486',
    contactTime: '9:30-18:30',
    livingArea: '尖沙咀',
    latestCase: 'A999999'
  }];

  constructor() { }

  onSearch() {
  }

  // 選擇客戶CheckBox
  selectClient(id) {
    this.parentList.map((element, index) => {
      if (element.id !== id) {
        element.selected = false;
      }
    });
  }

  ngOnInit() {
  }

}
