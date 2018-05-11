import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { HK } from '../../option-data/hongkong.data';
import { language } from '../../option-data/language.data';
import { parentStatus } from '../../option-data/parent-status.data';
import { sex } from '../../option-data/sex.data';
import { ParentContactTime } from '../../option-data/parent-contact-time.data';
import { Belief } from '../../option-data/belief.data';

@Component({
  selector: 'app-client-details-basic',
  templateUrl: './client-details-basic.component.html',
  styleUrls: ['./client-details-basic.component.css']
})
export class ClientDetailsBasicComponent implements OnInit {

  // 发送短信数量和更换手机记录
  msgPhone = {
    sms: 12,
    smslocal: 6,
    phone: [{
      date: '2018-1-3',
      history: '13345856498'
    }, {
      date: '2018-1-6',
      history: '13345856488'
    }, {
      date: '2018-1-7',
      history: '13345856499'
    }]
  };

  clientInfo = {
    clientNo: '16512',
    name: '李先生',
    idNo: 'A123456(7)',
    idName: '李xx',
    registDate: '2018-05-07 13:13:13',
    follower: 'mario',
    phone: '88888888',
    fax: '88888888',
    livingArea: '銅鑼灣',
    mailAddress: 'xx街xx號xx樓xx',
    belief: '基督教',
    sex: '男',
    nationality: '中國',
    email: 'mario.lee@hkta.edu.hk',
    idEnName: 'Mario',
    birth: '1988-08',
    language: '中文（廣東話）',
    status: '正常',
    mobilePhone: '88888888',
    otherPhone: '8888888',
    contactTime: '9:30-12:00'
  };

  // 居住地點級聯選擇器
  livingArea = HK;

  // 主要語言選項
  languageOptions = language;

  // 客戶狀態選項
  statusOptions = parentStatus;

  // 客戶性別選項
  sexOptions = sex;

  // 可聯絡時間選項
  contactOptions = ParentContactTime;

  // 宗教信仰
  beliefOptions = Belief;

  @Input() editStatus = false;

  constructor() { }

  ngOnInit() {
  }

}
