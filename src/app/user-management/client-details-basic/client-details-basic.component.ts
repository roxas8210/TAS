import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-details-basic',
  templateUrl: './client-details-basic.component.html',
  styleUrls: ['./client-details-basic.component.css']
})
export class ClientDetailsBasicComponent implements OnInit {

  basicInfoForm: FormGroup;

  @Input() editStatus = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.basicInfoForm = this.fb.group({
      clientNo: ['16512'],
      name: ['李先生'],
      familyPhone: ['88888888'],
      fax: ['88888888'],
      livingArea: ['銅鑼灣'],
      address: ['xx街xx號xx樓xxx'],
      bank: ['匯豐銀行'],
      bankAccount: ['xxxx xxxx xxxx xxxx'],
      email: ['mario.lee@hkta.edu.hk'],
      mobilePhone: ['88888888'],
      otherPhone: ['88888888'],
      contactTime: ['9:30 - 18:30'],
      livingPoing: ['豪園'],
      mailAddress: ['xx街xx號xx樓xxx'],
      owner: ['李X']
    });
  }

}
