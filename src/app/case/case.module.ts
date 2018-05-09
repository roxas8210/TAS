import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseFollowComponent } from './case-follow/case-follow.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaseFollowDetailsComponent } from './case-follow-details/case-follow-details.component';
import { RouterModule } from '@angular/router';
import { CaseInfoComponent } from './case-info/case-info.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [CaseFollowComponent, CaseFollowDetailsComponent, CaseInfoComponent]
})
export class CaseModule { }
