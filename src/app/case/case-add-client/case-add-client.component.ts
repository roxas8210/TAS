import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { sex } from '../../option-data/sex.data';
import { HK2 } from '../../option-data/hongkong2.data';
import { language } from '../../option-data/language.data';

@Component({
  selector: 'app-case-add-client',
  templateUrl: './case-add-client.component.html',
  styleUrls: ['./case-add-client.component.less']
})
export class CaseAddClientComponent implements OnInit {

  addClientForm: FormGroup;

  sexOptions = sex;

  livingAreaOptions = HK2;

  languageOptions = language;

  addClient = {
    name: '',
    email: '',
    idNo: '',
    sex: '男',
    idName: '',
    idEnName: '',
    phone: '',
    telephone: '',
    fax: '',
    otherPhone: '',
    livingArea: '',
    birth: '',
    language: '',
    mailAddress: '',
    belief: ''
  };

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.addClientForm = this.fb.group(this.addClient);
  }

}
