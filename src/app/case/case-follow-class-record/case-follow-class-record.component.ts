import { Component, OnInit } from '@angular/core';
import { ClassLong } from '../../option-data/class-long.data';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-case-follow-class-record',
  templateUrl: './case-follow-class-record.component.html',
  styleUrls: ['./case-follow-class-record.component.less']
})
export class CaseFollowClassRecordComponent implements OnInit {

  // 已上堂數
  classNum = 1;

  // 上課日期
  add_class_date;

  // 時長選項
  classLong = ClassLong;

  classRecordList = [{
    id: 1,
    classNum: 1,
    classDate: '2018/05/11',
    status: '上課中',
    duration: '1h',
    charge: '166.7/1hr',
    ignore_freeze: false,
    cancel_class: false
  }, {
    id: 2,
    classNum: 2,
    classDate: '2018/05/11',
    status: '上課中',
    duration: '1h',
    charge: '166.7/1hr',
    ignore_freeze: false,
    cancel_class: false
  }, {
    id: 3,
    classNum: 4,
    classDate: '2018/05/11',
    status: '上課中',
    duration: '1h',
    charge: '166.7/1hr',
    ignore_freeze: false,
    cancel_class: false
  }];

  constructor(private modelService: NzModalService) { }

  test() {
    console.log(this.classRecordList);
  }

  ignoreFreeze(id) {
    const that = this;
    this.modelService.open({
      title: '警告',
      content: '是否確認忽略該課程凍結？',
      onOk() {
        that.classRecordList.map((element, index) => {
          if (element.id === id) {
            element.ignore_freeze = true;
          }
        });
      }
    });
  }

  cancelClass(id) {
    const that = this;
    this.modelService.open({
      title: '警告',
      content: '是否確認取消該課程？',
      onOk() {
        that.classRecordList.map((element, index) => {
          if (element.id === id) {
            element.cancel_class = true;
          }
        });
      }
    });
  }

  ngOnInit() {
  }

}
