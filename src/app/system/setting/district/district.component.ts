import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  districtForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.districtForm = this.fb.group({
      districtSwitch: [true, Validators.required],
      webAddress: ['www.', Validators.required],
      operator: ['test', Validators.required]
    });
  }

}
