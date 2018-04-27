import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { IndexComponent as MainIndexComponent } from '../main/index/index.component';
import { SettingComponent } from '../system/setting/setting.component';
import { PageComponent } from '../system/page/page.component';

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
    }]
}];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class IndexRoutingModule {
}
