import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClientIdService } from '../../service/client-id.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  selectedIndex = 0;

  tabs = [{
    name: '基本信息',
    content: [{
      title: 'hello world',
      name: '!!'
    }]
  }, {
    name: '賬單詳情',
    content: [{
      title: 'hello world',
      name: '!!'
    }]
  }, {
      name: '相關個案',
      content: '相關個案'
  }];

  id;

  // 區域選擇（雙向綁定）
  districtSelectedOption;

  // 區域選擇數據
  districtOptions = [{
    label: '香港',
    value: '1'
  }, {
    label: '江門',
    value: '2'
  }];

  // 改變標籤頁
  changeTab($event) {
    console.log('當前選擇tab', this.selectedIndex);
  }

  constructor(
    private routerInfo: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.routerInfo.params.subscribe((parmas: Params) => {
      this.id = parmas.id;
      console.log('獲取的id', parmas.id);
    });
  }

}
