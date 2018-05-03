import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-teacher-basic',
  templateUrl: './teacher-basic.component.html',
  styleUrls: ['./teacher-basic.component.css']
})
export class TeacherBasicComponent implements OnInit {

  basicInfoForm: FormGroup;

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

  @Input() editStatus = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.basicInfoForm = this.fb.group({
      clientNo: ['16512'],
      name: ['李先生'],
      familyPhone: ['88888888'],
      fax: ['88888888'],
      livingArea: ['銅鑼灣'],
      address: ['xx街xx號xx樓xxx'],
      bank: ['匯豐銀行'],
      bankAccount: ['xxxx xxxx xxxx xxxx'],
      email: ['mario.lee@hkta.edu.hk'],
      mobilePhone: ['88888888'],
      otherPhone: ['88888888'],
      contactTime: ['9:30 - 18:30'],
      livingPoing: ['豪園'],
      mailAddress: ['xx街xx號xx樓xxx'],
      owner: ['李X']
    });
  }

}
