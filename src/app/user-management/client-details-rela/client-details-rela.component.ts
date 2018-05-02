import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-details-rela',
  templateUrl: './client-details-rela.component.html',
  styleUrls: ['./client-details-rela.component.css']
})
export class ClientDetailsRelaComponent implements OnInit {

  tabs = [{
    name: 'A164622',
    content: {
      name: 'A164622',
      address: '銅鑼灣，豪園',
      wantCourse: '小一，全科',
      sex: '男',
      wantLang: '中文小學'
    }
  }, {
    name: 'A164623',
    content: {
      name: 'A164623',
      address: '銅鑼灣',
      wantCourse: '小二，全科',
      sex: '女',
      wantLang: '中文小學'
    }
    }, {
      name: 'A164622',
      content: {
        name: 'A164622',
        address: '銅鑼灣，豪園',
        wantCourse: '小一，全科',
        sex: '男',
        wantLang: '中文小學'
      }
    }, {
      name: 'A164623',
      content: {
        name: 'A164623',
        address: '銅鑼灣',
        wantCourse: '小二，全科',
        sex: '女',
        wantLang: '中文小學'
      }
    }, {
      name: 'A164622',
      content: {
        name: 'A164622',
        address: '銅鑼灣，豪園',
        wantCourse: '小一，全科',
        sex: '男',
        wantLang: '中文小學'
      }
    }, {
      name: 'A164623',
      content: {
        name: 'A164623',
        address: '銅鑼灣',
        wantCourse: '小二，全科',
        sex: '女',
        wantLang: '中文小學'
      }
    }, {
      name: 'A164622',
      content: {
        name: 'A164622',
        address: '銅鑼灣，豪園',
        wantCourse: '小一，全科',
        sex: '男',
        wantLang: '中文小學'
      }
    }, {
      name: 'A164623',
      content: {
        name: 'A164623',
        address: '銅鑼灣',
        wantCourse: '小二，全科',
        sex: '女',
        wantLang: '中文小學'
      }
    }, {
      name: 'A164623',
      content: {
        name: 'A164623',
        address: '銅鑼灣',
        wantCourse: '小二，全科',
        sex: '女',
        wantLang: '中文小學'
      }
    }];

  constructor() { }

  ngOnInit() {
  }

}
