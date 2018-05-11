import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { sex } from '../../option-data/sex.data';
import { HK } from '../../option-data/hongkong.data';
import { Belief } from '../../option-data/belief.data';
import { language } from '../../option-data/language.data';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  clientForm: FormGroup;

  // 性別選項
  sexOptions = sex;

  // 居住地區選項
  livingArea = HK;

  // 宗教信仰選項
  beliefOptions = Belief;

  // 主要語言
  languageOptions = language;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.clientForm = this.fb.group({
      name: [''],
      idCardNo: [''],
      idCardName: [''],
      familyPhone: [''],
      fax: [''],
      livingArea: [''],
      language: [''],
      belief: [''],
      email: [''],
      sex: [''],
      idCardEnName: [''],
      mobilePhone: [''],
      otherPhone: [''],
      birth: [''],
      mailAddress: [''],
      nationality: ['']
    });
  }

}
