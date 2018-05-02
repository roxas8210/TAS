import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ClientIdService } from '../../service/client-id.service';

@Component({
  selector: 'app-client-details-bill',
  templateUrl: './client-details-bill.component.html',
  styleUrls: ['./client-details-bill.component.css']
})
export class ClientDetailsBillComponent implements OnInit {

  billList = [{
    time: '2018-04-30  15:13:13',
    type: '提現',
    income: '0',
    expend: '500.00',
    balance: '100.00',
    rela: {
      name: 'A999999',
      url: '/'
    },
    status: '銀行處理中',
    remark: ''
  }, {
    time: '2018-04-30  15:13:13',
    type: '提現',
    income: '0',
    expend: '500.00',
    balance: '100.00',
    rela: {
      name: 'A999999',
      url: '/'
    },
    status: '銀行處理中',
    remark: ''
  }, {
    time: '2018-04-30  15:13:13',
    type: '提現',
    income: '0',
    expend: '500.00',
    balance: '100.00',
    rela: {
      name: 'A999999',
      url: '/'
    },
    status: '銀行處理中',
    remark: ''
  }];

  balance;

  constructor() { }

  ngOnInit() {
    this.balance = this.billList[0].balance;
  }

}
