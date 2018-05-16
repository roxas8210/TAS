import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-teacher',
  templateUrl: './select-teacher.component.html',
  styleUrls: ['./select-teacher.component.less']
})
export class SelectTeacherComponent implements OnInit {

  // 是否已選擇導師
  selected = false;

  // 已選擇導師的信息
  selected_teacher = {
    id: '987654321',
    sex: '女',
    name: '李小姐',
    phone: '12354567',
    language: '中文（廣東話）',
    livingArea: '銅鑼灣',
    highestEdu: '碩士',
    livingPoint: '豪園',
    job: '在職教師',
    introduce: '大家好，我是張家輝。'
  };

  // 選擇首堂時間
  first_class = {
    date: '2018-05-15',
    time: new Date()
  };

  // 首堂時間是否更改
  timeChange = false;

  currentPage = 1;

  // 導師自薦列表
  teacherSelfIntroduceList = [{
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    existCase: [{
      name: 'A2123456',
    }, {
      name: 'A2123457',
    }, {
      name: 'A2123458',
    }],
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '陳小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    existCase: [{
      name: 'A2123456',
    }, {
      name: 'A2123457',
    }, {
      name: 'A2123458',
    }],
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    existCase: [{
      name: 'A2123456',
    }, {
      name: 'A2123457',
    }, {
      name: 'A2123458',
    }],
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    existCase: [{
      name: 'A2123456',
    }, {
      name: 'A2123457',
    }, {
      name: 'A2123458',
    }],
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    existCase: [{
      name: 'A2123456',
    }, {
      name: 'A2123457',
    }, {
      name: 'A2123458',
    }],
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    existCase: [{
      name: 'A2123456',
    }, {
      name: 'A2123457',
    }, {
      name: 'A2123458',
    }],
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    existCase: [{
      name: 'A2123456',
    }, {
      name: 'A2123457',
    }, {
      name: 'A2123458',
    }],
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    existCase: [{
      name: 'A2123456',
    }, {
      name: 'A2123457',
    }, {
      name: 'A2123458',
    }],
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    existCase: [{
      name: 'A2123456',
    }, {
      name: 'A2123457',
    }, {
      name: 'A2123458',
    }],
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
    existCase: [{
      name: 'A2123456',
    }, {
      name: 'A2123457',
    }, {
      name: 'A2123458',
    }],
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    existCase: [{
      name: 'A2123456',
    }, {
      name: 'A2123457',
    }, {
      name: 'A2123458',
    }],
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    existCase: [{
      name: 'A2123456',
    }, {
      name: 'A2123457',
    }, {
      name: 'A2123458',
    }],
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    existCase: [{
      name: 'A2123456',
    }, {
      name: 'A2123457',
    }, {
      name: 'A2123458',
    }],
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    existCase: [{
      name: 'A2123456',
    }, {
      name: 'A2123457',
    }, {
      name: 'A2123458',
    }],
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    existCase: [{
      name: 'A2123456',
    }, {
      name: 'A2123457',
    }, {
      name: 'A2123458',
    }],
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    existCase: [{
      name: 'A2123456',
    }, {
      name: 'A2123457',
    }, {
      name: 'A2123458',
    }],
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    existCase: [{
      name: 'A2123456',
    }, {
      name: 'A2123457',
    }, {
      name: 'A2123458',
    }],
    registDate: '2018/05/09',
    checked: false
  }, {
    name: '李小姐',
    sex: '女',
    highestEdu: '碩士',
    job: '在職教師',
    phone: '12345678',
    existCase: [{
      name: 'A2123456',
    }, {
      name: 'A2123457',
    }, {
      name: 'A2123458',
    }],
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

  // 點擊選擇導師
  goSelecte() {
    this.selected = true;
  }

  // 修改首堂日期后執行
  timeChangeStatus() {
    this.timeChange = true;
  }

  ngOnInit() {
  }

}
