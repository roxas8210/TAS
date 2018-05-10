import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-info',
  templateUrl: './case-info.component.html',
  styleUrls: ['./case-info.component.less']
})
export class CaseInfoComponent implements OnInit {

  editStatus = false;

  addressOptions = [{
    label: '沙田大圍',
    value: '沙田大圍'
  }, {
    label: '江門',
    value: '江門'
  }];

  failureOptions = [{
    label: '家長走數',
    value: '家長走數'
  }, {
    label: '導師爽約',
    value: '導師爽約'
  }];

  caseInfo = {
    address: '沙田大圍',
    livingAddress: '沙田大圍',
    week: '一至五2日',
    studingAddress: 'masked',
    mailAddress: 'masked',
    time: '1.5hr',
    level: '小一，小二',
    subject: '全科',
    studyTime: '一三16:30',
    language: '',
    studentName: '馬xx',
    tuition: '$250/1hr',
    studentSex: '男',
    languageInSchool: '',
    agreementTimes: '5',
    studentSchool: '',
    requireTeacherEducation: '全職補習',
    teacherSex: '不限',
    studentPhone: '',
    liaisonsStudentRela: '母親',
    liaisonsId: '73999',
    liaisonsMobilePhone: '12345678',
    liaisonsPhone: '12345678',
    liaisonsName: '李小姐',
    liaisonsEmail: '73999@hkta.edu.hk',
    liaisonsFax: 'masked',
    liaisonsOtherPhone: '12345678',
    otherInfo: '',
    caseStatus: '有待處理'
  };

  // 失敗原因
  failure;

  // 選擇跟進中的個案
  followingCase;

  // 延時原因
  delayReason;

  // 延時記錄
  delayHistory = [{
    date: '2016-09-27',
    name: 'sweety',
    reason: '延時',
    result: '通過審核',
    permission: 'catf'
  }, {
    date: '2016-09-27',
    name: 'mario',
    reason: '延時',
    result: '通過審核',
    permission: 'catf'
  }, {
    date: '2016-09-27',
    name: 'Tom',
    reason: '延時',
    result: '通過審核',
    permission: 'catf'
  }];

  // 此工作轉送給
  send;

  // 協助處理
  assistant;

  constructor() { }

  changeStatus() {
    this.editStatus = true;
    // this.editStatus = !this.editStatus;
  }

  finishChange() {
    this.editStatus = false;
  }

  ngOnInit() {
  }

}
