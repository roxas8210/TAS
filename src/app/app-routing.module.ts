import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// 根路由，默認首頁選擇index路由，子路由在index模塊
const routes: Routes = [{
    path: 'index',
    redirectTo: '/index',
    pathMatch: 'full'
}, {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
}];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
