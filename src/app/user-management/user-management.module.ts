import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { NgZorroAntdModule, NzModalService } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientDetailsBasicComponent } from './client-details-basic/client-details-basic.component';
import { RouterModule } from '@angular/router';
import { ClientDetailsBillComponent } from './client-details-bill/client-details-bill.component';
import { ClientIdService } from '../service/client-id.service';
import { ClientDetailsRelaComponent } from './client-details-rela/client-details-rela.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { ClientSearchComponent } from './client-search/client-search.component';
import { BlackListComponent } from './black-list/black-list.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    ClientListComponent,
    ClientDetailsComponent,
    ClientDetailsBasicComponent,
    ClientDetailsBillComponent,
    ClientDetailsRelaComponent,
    ClientAddComponent,
    ClientSearchComponent,
    BlackListComponent
  ],
  providers: [
    ClientIdService,
    NzModalService
  ],
  entryComponents: [
    ClientAddComponent,
    ClientSearchComponent
  ]
})
export class UserManagementModule { }
