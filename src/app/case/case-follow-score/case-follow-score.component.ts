import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-follow-score',
  templateUrl: './case-follow-score.component.html',
  styleUrls: ['./case-follow-score.component.less']
})
export class CaseFollowScoreComponent implements OnInit {

  teacherScore = 5;

  parentScore = 5;

  myScoreForTeacher;

  myScoreForParent;

  scoreList = [{
    name: '李先生',
    time: '2018-04-27 16:52:13',
    forWho: '導師',
    score: 5,
    remark: 'very good'
  }, {
    name: 'Miss李',
    time: '2018-04-27 16:52:13',
    forWho: '家长',
    score: 5,
    remark: 'very good'
  }, {
    name: '李先生',
    time: '2018-04-27 16:52:13',
    forWho: '導師',
    score: 5,
    remark: 'very good'
  }];

  scoreOptions = [{
    label: 5,
    value: 5
  }, {
    label: 4,
    value: 4
  }, {
    label: 3,
    value: 3
  }, {
    label: 2,
    value: 2
  }, {
    label: 1,
    value: 1
  }];

  constructor() { }

  ngOnInit() {
  }

}
