import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TabbarService } from '../../service/tabbar.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  settingForm: FormGroup;

  constructor(private tabbarService: TabbarService) { }

  ngOnInit() {
    const page = {
      'id': 71,
      'title': '系統設置',
      'url': '/index/system/setting',
      'activeStatus': true
    };
    this.tabbarService.setTabbar(page);
  }

}
