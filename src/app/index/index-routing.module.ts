import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { IndexComponent as MainIndexComponent } from '../main/index/index.component';
import { SettingComponent } from '../system/setting/setting.component';
import { PageComponent } from '../system/page/page.component';
import { ClientListComponent } from '../user-management/client-list/client-list.component';
import { ClientDetailsComponent } from '../user-management/client-details/client-details.component';
import { ClientDetailsBasicComponent } from '../user-management/client-details-basic/client-details-basic.component';
import { ClientDetailsBillComponent } from '../user-management/client-details-bill/client-details-bill.component';
import { TeacherListComponent } from '../teacher/teacher-list/teacher-list.component';
import { TeacherReviewComponent } from '../teacher/teacher-review/teacher-review.component';
import { TeacherDetailsComponent } from '../teacher/teacher-details/teacher-details.component';
import { TeacherSearchComponent } from '../teacher/teacher-search/teacher-search.component';
import { BlackListComponent } from '../user-management/black-list/black-list.component';
import { EmployeeListComponent } from '../employee/employee-list/employee-list.component';
import { DepartmentComponent } from '../employee/department/department.component';
import { CaseFollowComponent } from '../case/case-follow/case-follow.component';
import { AuthSettingComponent } from '../employee/auth-setting/auth-setting.component';

/* index模塊路由
*  /index/system/setting為“系統設置”路由
*  /index/system/page為“頁面設置”路由
*  /index/user/client為“客戶列表”路由
*  /index/user/client/details為“客戶列表”中單獨一條數據跳轉的路由
*
*  /index/user/teacher為“導師列表”路由
*  /index/user/teacher/review為“導師審核”路由
*  /index/user/teacher/details為“導師列表”中單獨一條數據跳轉的路由
*/
const routes: Routes = [{
    path: 'index',
    component: IndexComponent,
    children: [{
        path: '',
        component: MainIndexComponent
    }, {
        path: 'system/setting',
        component: SettingComponent
    }, {
        path: 'system/page',
        component: PageComponent
    }, {
        path: 'user/client',
        component: ClientListComponent
    }, {
        path: 'user/client/details/:id',
        component: ClientDetailsComponent
    }, {
        path: 'user/client/details',
        component: ClientDetailsComponent
    }, {
        path: 'user/teacher',
        component: TeacherListComponent
    }, {
        path: 'user/teacher/review',
        component: TeacherReviewComponent
    }, {
        path: 'user/teacher/details',
        component: TeacherDetailsComponent
    }, {
        path: 'user/teacher/details/:id',
        component: TeacherDetailsComponent
    }, {
        path: 'user/teacher/search',
        component: TeacherSearchComponent
    }, {
        path: 'user/blacklist',
        component: BlackListComponent
    }, {
        path: 'employee/department',
        component: DepartmentComponent
    }, {
        path: 'employee/list',
        component: EmployeeListComponent
    }, {
        path: 'employee/auth',
        component: AuthSettingComponent
    }, {
        path: 'case/follow',
        component: CaseFollowComponent
    }]
}];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class IndexRoutingModule {
}
