import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-follow-pay-details',
  templateUrl: './case-follow-pay-details.component.html',
  styleUrls: ['./case-follow-pay-details.component.less']
})
export class CaseFollowPayDetailsComponent implements OnInit {

  // 付款表狀態
  paymentStatus = '未知數';

  payment = {
    first_class_date: '2018/05/09',
    changeTimes: '0',
    timeRangStart: '16:16',
    timeRangEnd: '16:16',
    six_percent: 'yes',
    payable_date: '',
    classTimeNum: '0.0',
    receivable_tuition: '1875.0',
    receipts_tuition: '0.0', // 實收學費
    payed_commission: '1875.0', // 預付佣金
    receipts_commission: '0.0', // 實收佣金
    notice_parent_date: '', // 已通知家長入數日期
    editdate: '2018/05/09', // 入數日期/時間
    editTime: '16:00',
    bank: '',
    process: '',
    parent_receipt_no: 'masked',
    payment_photo: '',
    teacher_name: 'masked',
    teacher_bank_name: '',
    teacher_password: 'masked',
    check_date: '',
    check_no: 'masked',
    keep_follow: 'yes',
    status: '',
    teacher_cancel_reason: '',
    parent_cancel_reason: '',
    canceled: 'yes',
    cut_off_time: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
