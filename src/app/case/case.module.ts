import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseFollowComponent } from './case-follow/case-follow.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CaseFollowComponent]
})
export class CaseModule { }
