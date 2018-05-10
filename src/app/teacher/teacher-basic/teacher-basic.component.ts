import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teacher-basic',
  templateUrl: './teacher-basic.component.html',
  styleUrls: ['./teacher-basic.component.css']
})
export class TeacherBasicComponent implements OnInit {

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

  idOptions = [{
    label: '79123',
    value: '79123'
  }, {
    label: '79124',
    value: '79124'
  }];

  typeOptions = [{
    label: '音樂',
    value: '音樂'
  }];

  subjectOptions = [{
    label: '鋼琴',
    value: '鋼琴'
  }];

  levelRangStartOptions = [{
    label: '初學',
    value: '初學'
  }];

  levelRangEndOptions = [{
    label: '八級',
    value: '八級'
  }];

  basicInfo = {
    id: '79123',
    status: '已確認',
    nickName: '',
    loginTime: '2018-05-03 12:27:27',
    enName: '',
    lastTimeLogin: '2018-05-03 12:27:27',
    blackListReason: '',
    caseNum: '1',
    caseInfo: {
      doing: 1,
      finish: 0,
      sum: 1,
      lower250: 0,
      canceled: 0
    },
    emailStatus: '接收',
    cancelAccount: '否',
    subjects: [{
      type: '音樂',
      subject: '鋼琴',
      levelRangStart: '初學',
      levelRangEnd: '八級'
    }, {
      type: '音樂',
      subject: '鋼琴',
      levelRangStart: '初學',
      levelRangEnd: '八級'
    }]
  };

  addSubject = {
    type: '',
    subject: '',
    levelRangEnd: '',
    levelRangStart: ''
  };

  @Input() editStatus = false;

  constructor() { }

  ngOnInit() {
  }

}
