import { Component, OnInit } from '@angular/core';
import { TabbarService } from '../../service/tabbar.service';
import { district } from '../../option-data/district.data';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-case-follow-details',
  templateUrl: './case-follow-details.component.html',
  styleUrls: ['./case-follow-details.component.less']
})
export class CaseFollowDetailsComponent implements OnInit {

  selectedIndex = 0;

  tabs = [{
    name: '個案資料'
  }, {
    name: '個案評分'
  }, {
    name: '導師選擇'
  }, {
    name: '付款相關記錄'
  }, {
    name: '補習備註'
  }, {
    name: '上課記錄'
  }];

  constructor(
    private tabbarService: TabbarService,
    private routerInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routerInfo.params
    .switchMap((params: Params) => {
      console.log(params.id);
      const page = {
        'id': 311 + params.id,
        'title': '補習個案',
        'url': `/index/case/follow/details/${params.id}`,
        'activeStatus': true
      };
      this.tabbarService.setTabbar(page);
      return this.tabbarService.subject;
    }).subscribe(() => {
      console.log('成功進入個案詳情');
    });
  }

}
