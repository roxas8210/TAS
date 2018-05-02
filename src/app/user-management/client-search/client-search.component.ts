import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { sex } from '../../option-data/sex.data';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.css']
})
export class ClientSearchComponent implements OnInit {

  searchForm: FormGroup;

  sexOptions = sex;

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
