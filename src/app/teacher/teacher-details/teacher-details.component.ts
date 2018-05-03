import { Component, OnInit } from '@angular/core';
import { district } from '../../option-data/district.data';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {

  selectedIndex = 0;

  tabs = [{
    name: '基本信息'
  }, {
    name: '賬單詳情'
  }, {
    name: '相關個案'
  }, {
    name: '導師詳細信息'
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

  constructor() { }

  ngOnInit() {
  }

}
