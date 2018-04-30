import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-system-setting',
  templateUrl: './system-setting.component.html',
  styleUrls: ['./system-setting.component.css']
})
export class SystemSettingComponent implements OnInit {

  settingForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  // 構建響應式表單
  ngOnInit() {
    this.settingForm = this.fb.group({
      emailAddress: ['', Validators.required],
      emailPort: ['', Validators.required],
      outboundDialSytem: ['', Validators.required],
      smsApiPassword: ['', Validators.required],
      jobSearchEmailsLimit: ['', Validators.required],
      emailUserName: ['', Validators.required],
      emailPassword: ['', Validators.required],
      enableEmailTLS: [true, Validators.required],
      authEmail: [true, Validators.required],
      massiveEmailAddress: ['', Validators.required],
      massiveEmailPort: ['', Validators.required],
      massiveEmailUserName: ['', Validators.required],
      massiveEmailPassword: ['', Validators.required],
      massiveEmailTLS: [false, Validators.required],
      massiveEmailAuth: [false, Validators.required],
      paypal: [false, Validators.required],
      Stripe: [false, Validators.required]
    });
  }

}
