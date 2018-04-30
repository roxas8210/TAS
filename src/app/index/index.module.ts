import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';

import { IndexRoutingModule } from './index-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MemoComponent } from './memo/memo.component';
import { NoticeComponent } from './notice/notice.component';

import { MainModule } from '../main/main.module';
import { SystemModule } from '../system/system.module';
import { HoverMenuDirective } from './directive/hover-menu.directive';

import { TabbarComponent } from './tabbar/tabbar.component';
import { TabbarService } from '../service/tabbar.service';
import { UserManagementModule } from '../user-management/user-management.module';

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    MainModule,
    NgZorroAntdModule,
    SystemModule,
    UserManagementModule
  ],
  declarations: [IndexComponent, MemoComponent, NoticeComponent, HoverMenuDirective, TabbarComponent],
  providers: [TabbarService]
})
export class IndexModule { }
