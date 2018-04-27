import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
// import { IndexRoutingModule } from './main-routing.module';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { TitleService } from '../service/title.service';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [IndexComponent],
  providers: [TitleService]
})
export class MainModule { }
