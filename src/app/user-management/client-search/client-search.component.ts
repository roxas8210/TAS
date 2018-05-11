import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { sex } from '../../option-data/sex.data';
import { HK } from '../../option-data/hongkong.data';
import { Belief } from '../../option-data/belief.data';
import { language } from '../../option-data/language.data';
import { parentStatus } from '../../option-data/parent-status.data';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.css']
})
export class ClientSearchComponent implements OnInit {

  searchForm: FormGroup;

  sexOptions = sex;

  livingArea = HK;

  // 宗教信仰
  beliefOptions = Belief;

  // 主要語言
  languageOptions = language;

  // 賬戶狀態
  statusOptions = parentStatus;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      clientNo: [''],
      name: [''],
      idCardNo: [''],
      idCardName: [''],
      familyPhone: [''],
      fax: [''],
      livingArea: [''],
      follow: [''],
      language: [''],
      belief: [''],
      email: [''],
      sex: [''],
      idCardEnName: [''],
      mobilePhone: [''],
      otherPhone: [''],
      birth: [''],
      mailAddress: [''],
      registerTime: [''],
      clientStatus: [''],
      nationality: ['']
    });
  }

}
