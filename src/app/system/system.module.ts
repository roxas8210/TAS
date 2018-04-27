import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting/setting.component';
import { PageComponent } from './page/page.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DistrictComponent } from './setting/district/district.component';
import { SystemSettingComponent } from './setting/system-setting/system-setting.component';
import { HoverMenuDirective } from '../index/directive/hover-menu.directive';

import { TitleService } from '../service/title.service';
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SettingComponent,
    PageComponent,
    DistrictComponent,
    SystemSettingComponent
  ],
  providers: [TitleService]
})
export class SystemModule { }
