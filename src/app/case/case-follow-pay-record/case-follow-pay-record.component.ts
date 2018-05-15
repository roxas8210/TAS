import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-case-follow-pay-record',
  templateUrl: './case-follow-pay-record.component.html',
  styleUrls: ['./case-follow-pay-record.component.less']
})
export class CaseFollowPayRecordComponent implements OnInit {

  // 模態框是否彈出
  isVisible = false;

  // 扣費類型選項（待定）
  options = [{
    label: '凍結',
    value: '凍結'
  }, {
    label: '正常',
    value: '正常'
  }];

  payRecordList = [{
    payDate: '2017-04-30 13:13:13',
    payType: '課款',
    payStatus: '凍結',
    paySum: '999999',
    payAccount: '李先生',
    brokerage: 'anna'
  }, {
    payDate: '2017-04-30 13:13:13',
    payType: '課款',
    payStatus: '凍結',
    paySum: '999999',
    payAccount: '李小姐',
    brokerage: 'anna'
  }, {
    payDate: '2017-04-30 13:13:13',
    payType: '課款',
    payStatus: '凍結',
    paySum: '999999',
    payAccount: '李先生',
    brokerage: 'anna'
  }];

  addPaymentForm: FormGroup;

  constructor(
    private modalService: NzModalService,
    private fb: FormBuilder
  ) { }

  openModel() {
    this.isVisible = true;
  }

  addPayment() {
  }

  cancelAdd() {
    this.isVisible = false;
    this.addPaymentForm.reset();
  }

  ngOnInit() {
    this.addPaymentForm = this.fb.group({
      notice_pay_date: ['2018-05-15'],
      charge_date: ['2018-05-15'],
      type: [''],
      charge_time: [''],
      charge_class_num: [''],
      protocol_class_num: [''],
      recieved_money: [''],
      commission_change: [''],
      remark: ['']
    });
  }

}
