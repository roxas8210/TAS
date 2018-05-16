import { Component, OnInit } from '@angular/core';
import { district } from '../../option-data/district.data';
import { TabbarService } from '../../service/tabbar.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { subject } from '../../checkbox-data/subject.data';
import { MusicSubject } from '../../checkbox-data/music-subject.data';
import { LanguageSubject } from '../../checkbox-data/language-subject.data';
import { OtherSubject } from '../../checkbox-data/other-subject.data';
import { sex } from '../../option-data/sex.data';
import { language } from '../../option-data/language.data';
import { HK } from '../../option-data/hongkong.data';

@Component({
  selector: 'app-case-add',
  templateUrl: './case-add.component.html',
  styleUrls: ['./case-add.component.less']
})
export class CaseAddComponent implements OnInit {

  // 選中的區域
  selectedDistrict;

  // 區域選項
  districtOptions = district;

  selectedIndex = 0;

  // 項目級別選項
  subjectSelectedIndex = 0;

  caseInfoForm: FormGroup;

  // 性別選項
  sexOptions = sex;

  // 語言選項
  languageOptions = language;

  // 居住區域選項
  livingAreaOptions = HK;

  // 科目級別（待定）
  options = [{
    label: '一級',
    value: '一級'
  }, {
    label: '二級',
    value: '二級'
  }];

  addTabs = [{
    name: '新增客戶'
  }, {
    name: '選擇客戶'
  }];

  subjectTabs = [{
    name: '補習'
  }, {
    name: '音樂'
  }, {
    name: '會話'
  }, {
    name: '其他'
  }];

  remediationSubjects = subject;

  musicSubjects = MusicSubject;

  languageSubjects = LanguageSubject;

  otherSubjects = OtherSubject;

  constructor(
    private tabbarService: TabbarService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.caseInfoForm = this.fb.group({
      teach_language: [''],
      client_rela_with_student: [''],
      student_name: [''],
      student_sex: [''],
      student_phone: [''],
      student_school: [''],
      teach_language_in_school: [''],
      study_times_per_week: [''],
      per_time: [''],
      study_time: [''],
      student_tuition: [''],
      lowest_education: [''],
      teacher_sex: [''],
      agreement_lessons: [''],
      study_area: [''],
      study_address: [''],
      other_info: [''],
      how_konw_our_company: ['']
    });

    const page = {
      'id': 31,
      'title': '新增個案',
      'url': '/index/case/add',
      'activeStatus': true
    };
    this.tabbarService.setTabbar(page);
    this.selectedDistrict = this.districtOptions[0].value;
  }

}
