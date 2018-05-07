import { Component, OnInit } from '@angular/core';
import { area } from '../../checkbox-data/area.data';

@Component({
  selector: 'app-teacher-area',
  templateUrl: './teacher-area.component.html',
  styleUrls: ['./teacher-area.component.less']
})
export class TeacherAreaComponent implements OnInit {

  areaArray = [[{
    label: '港島全區',
    value: '港島全區',
    checked: true,
    text: '港島全區',
    disabled: false
  }, {
    label: '中半山',
    value: '中半山',
    checked: false,
    text: '中半山',
  }, {
    label: '薄扶林',
    value: '薄扶林',
    checked: false,
    text: '薄扶林',
  }, {
    label: '中上環',
    value: '中上環',
    checked: false,
    text: '中上環',
  }, {
    label: '西環',
    value: '西環',
    checked: false,
    text: '西環',
  }], [{
    label: '九龍全區',
    value: '九龍全區',
    checked: false,
    text: '九龍全區',
  }, {
    label: '中半山',
    value: '中半山',
    checked: false,
    text: '中半山',
  }, {
    label: '薄扶林',
    value: '薄扶林',
    checked: false,
    text: '薄扶林',
  }, {
    label: '中上環',
    value: '中上環',
    checked: false,
    text: '中上環',
  }, {
    label: '西環',
    value: '西環',
    checked: false,
    text: '西環',
  }], [{
    label: '新界全區',
    value: '新界全區',
    checked: false,
    text: '新界全區',
  }, {
    label: '中半山',
    value: '中半山',
    checked: false,
    text: '中半山',
  }, {
    label: '薄扶林',
    value: '薄扶林',
    checked: false,
    text: '薄扶林',
  }, {
    label: '中上環',
    value: '中上環',
    checked: false,
    text: '中上環',
  }, {
    label: '西環',
    value: '西環',
    checked: false,
    text: '西環',
  }]];

  postArea;

  constructor() { }

  modelChange(test) {
    console.log('test');
  }

  ngOnInit() {
  }

}
