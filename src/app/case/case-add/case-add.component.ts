import { Component, OnInit } from '@angular/core';
import { district } from '../../option-data/district.data';
import { TabbarService } from '../../service/tabbar.service';

@Component({
  selector: 'app-case-add',
  templateUrl: './case-add.component.html',
  styleUrls: ['./case-add.component.less']
})
export class CaseAddComponent implements OnInit {

  // 選中的區域
  selectedDistrict;

  // 區域選項
  districtOptions = district;

  selectedIndex = 0;

  addTabs = [{
    name: '新增客戶'
  }, {
    name: '選擇客戶'
  }];

  constructor(private tabbarService: TabbarService) { }

  ngOnInit() {
    const page = {
      'id': 31,
      'title': '新增個案',
      'url': '/index/case/add',
      'activeStatus': true
    };
    this.tabbarService.setTabbar(page);
    this.selectedDistrict = this.districtOptions[0].value;
  }

}
