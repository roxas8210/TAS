import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClientIdService } from '../../service/client-id.service';
import { TabbarService } from '../../service/tabbar.service';
import { district } from '../../option-data/district.data';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  selectedIndex = 0;

  tabs = [{
    name: '基本信息'
  }, {
    name: '賬單詳情'
  }, {
      name: '相關個案'
  }];

  id;

  // 區域選擇（雙向綁定）
  districtSelectedOption;

  // 區域選擇數據
  districtOptions = district;

  editStatus = false;

  // 改變標籤頁
  changeTab($event) {
    console.log('當前選擇tab', this.selectedIndex);
  }

  changeEditStatus() {
    if (this.selectedIndex !== 0) {
      this.selectedIndex = 0;
    }
    if (this.editStatus) {
      this.editStatus = false;
    } else {
      this.editStatus = true;
    }
  }

  constructor(
    private routerInfo: ActivatedRoute,
    private router: Router,
    private tabbarService: TabbarService
  ) { }

  ngOnInit() {
    const id = this.routerInfo.params.subscribe((parmas: Params) => {
      this.id = parmas.id;
      console.log('獲取的id', parmas.id);
      // const page = {
      //   'id': 211,
      //   'title': '客户详情',
      //   'url': `/index/user/client/details/${this.id}`,
      //   'activeStatus': true
      // };
      // this.tabbarService.setTabbar(page);
      this.districtSelectedOption = this.districtOptions[0];
    });
  }

}
