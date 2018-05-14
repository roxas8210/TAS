import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseFollowComponent } from './case-follow/case-follow.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaseFollowDetailsComponent } from './case-follow-details/case-follow-details.component';
import { RouterModule } from '@angular/router';
import { CaseInfoComponent } from './case-info/case-info.component';
import { SelectTeacherComponent } from './select-teacher/select-teacher.component';
import { CaseFollowScoreComponent } from './case-follow-score/case-follow-score.component';
import { CaseFollowRemarkComponent } from './case-follow-remark/case-follow-remark.component';
import { CaseFollowPayRecordComponent } from './case-follow-pay-record/case-follow-pay-record.component';
import { CaseFollowClassRecordComponent } from './case-follow-class-record/case-follow-class-record.component';
import { NzModalService } from 'ng-zorro-antd';
import { CaseFollowPayDetailsComponent } from './case-follow-pay-details/case-follow-pay-details.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    CaseFollowComponent,
    CaseFollowDetailsComponent,
    CaseInfoComponent,
    SelectTeacherComponent,
    CaseFollowScoreComponent,
    CaseFollowRemarkComponent,
    CaseFollowPayRecordComponent,
    CaseFollowClassRecordComponent,
    CaseFollowPayDetailsComponent
  ],
  providers: [NzModalService]
})
export class CaseModule { }
