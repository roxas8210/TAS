import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { IndexModule } from './index/index.module';
import { LoginModule } from './login/login.module';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { TeacherSearchTagsReducer } from './reducers/teacher-search/teacher-search-tags.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IndexModule,
    LoginModule,
    NgZorroAntdModule.forRoot(),
    StoreDevtoolsModule.instrument({maxAge: 50}),
    StoreModule.forRoot({
      TeacherSearchTagsReducer
    })
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
