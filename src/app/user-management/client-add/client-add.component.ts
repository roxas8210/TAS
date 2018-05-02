import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { sex } from '../../option-data/sex.data';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  clientForm: FormGroup;

  sexOptions = sex;

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
