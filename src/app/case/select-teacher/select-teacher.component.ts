import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-teacher',
  templateUrl: './select-teacher.component.html',
  styleUrls: ['./select-teacher.component.less']
})
export class SelectTeacherComponent implements OnInit {

  currentPage = 1;

  // 導師自薦列表
  teacherSelfIntroduceList = [{
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    message: '無',
    remark: '選我選我',
    existCase: 'A123456',
    oldCase: 'A2123456',
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '陳小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    message: '無',
    remark: '選我選我',
    existCase: 'A123456',
    oldCase: 'A2123456',
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    message: '無',
    remark: '選我選我',
    existCase: 'A123456',
    oldCase: 'A2123456',
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    message: '無',
    remark: '選我選我',
    existCase: 'A123456',
    oldCase: 'A2123456',
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    message: '無',
    remark: '選我選我',
    existCase: 'A123456',
    oldCase: 'A2123456',
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    message: '無',
    remark: '選我選我',
    existCase: 'A123456',
    oldCase: 'A2123456',
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    message: '無',
    remark: '選我選我',
    existCase: 'A123456',
    oldCase: 'A2123456',
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    message: '無',
    remark: '選我選我',
    existCase: 'A123456',
    oldCase: 'A2123456',
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    message: '無',
    remark: '選我選我',
    existCase: 'A123456',
    oldCase: 'A2123456',
    registDate: '2018/05/09',
    checked: false
  }];

  // 系統推薦列表
  systemIntroduceList = [{
    name: '黃小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    message: '無',
    remark: '選我選我',
    existCase: 'A123456',
    oldCase: 'A2123456',
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    message: '無',
    remark: '選我選我',
    existCase: 'A123456',
    oldCase: 'A2123456',
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    message: '無',
    remark: '選我選我',
    existCase: 'A123456',
    oldCase: 'A2123456',
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    message: '無',
    remark: '選我選我',
    existCase: 'A123456',
    oldCase: 'A2123456',
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    message: '無',
    remark: '選我選我',
    existCase: 'A123456',
    oldCase: 'A2123456',
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    message: '無',
    remark: '選我選我',
    existCase: 'A123456',
    oldCase: 'A2123456',
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    message: '無',
    remark: '選我選我',
    existCase: 'A123456',
    oldCase: 'A2123456',
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    message: '無',
    remark: '選我選我',
    existCase: 'A123456',
    oldCase: 'A2123456',
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    message: '無',
    remark: '選我選我',
    existCase: 'A123456',
    oldCase: 'A2123456',
    registDate: '2018/05/09',
    checked: false
  }];

  // shortList
  shortListData = [];

  constructor() { }

  // 從自薦導師導入到short list
  pushSelfIntroduce() {
    const systemSelected = this.teacherSelfIntroduceList.filter(val => val.checked === true);
    systemSelected.map((element, index) => {
      element.checked = false;
    });
    this.shortListData.push(...systemSelected);
    console.log(this.shortListData);
  }

  // 從匹配導師導入到short list
  pushSystemIntroduce() {
    const systemSelected = this.systemIntroduceList.filter(val => val.checked === true);
    systemSelected.map((element, index) => {
      element.checked = false;
    });
    this.shortListData.push(...systemSelected);
    console.log(this.shortListData);
  }

  ngOnInit() {
  }

}
