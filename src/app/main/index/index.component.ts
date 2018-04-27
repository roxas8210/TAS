import { Component, OnInit } from '@angular/core';
import { TabbarService } from '../../service/tabbar.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  rank = [{
      order: 1,
      name: 'Eric',
      rank: 1,
      deal: 880
    }, {
      order: 2,
      name: 'Anna',
      rank: 2,
      deal: 800
    }, {
      order: 3,
      name: 'Mario',
      rank: 3,
      deal: 780
    }, {
      order: 4,
      name: 'James',
      rank: 4,
      deal: 700
    }, {
      order: 5,
      name: 'Luyi',
      rank: 5,
      deal: 680
    }, {
      order: 6,
      name: 'Eric',
      rank: 6,
      deal: 880
    }, {
      order: 7,
      name: 'Anna',
      rank: 7,
      deal: 880
    }, {
      order: 8,
      name: 'Mario',
      rank: 8,
      deal: 880
    }, {
      order: 9,
      name: 'James',
      rank: 9,
      deal: 880
    }, {
      order: 10,
      name: 'Luyi',
      rank: 10,
      deal: 880
    }];

    messages = [{
      name: '某位同事',
      details: '住大埔 兩年經驗 一年日本留學及工作 現在有教授學生日文JLPT N2 level',
      date: '2018-4-24   21：52'
    }, {
      name: '某位同事',
      details: '住大埔 兩年經驗 一年日本留學及工作 現在有教授學生日文JLPT N2 level',
      date: '2018-4-24   21：52'
    }, {
      name: '某位同事',
      details: '住大埔 兩年經驗 一年日本留學及工作 現在有教授學生日文JLPT N2 level',
      date: '2018-4-24   21：52'
    }];

  constructor(private tabbarService: TabbarService) { }

  ngOnInit() {
    const page = {
      'id': 1,
      'title': '首页',
      'url': '/index',
      'activeStatus': true
    };
    this.tabbarService.setTabbar(page);
  }

}
