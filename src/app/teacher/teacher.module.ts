import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherReviewComponent } from './teacher-review/teacher-review.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { TeacherBasicComponent } from './teacher-basic/teacher-basic.component';
import { TeacherBillComponent } from './teacher-bill/teacher-bill.component';
import { TeacherRelaComponent } from './teacher-rela/teacher-rela.component';
import { TeacherInfoComponent } from './teacher-info/teacher-info.component';
import { TeacherSearchComponent } from './teacher-search/teacher-search.component';
import { TeacherSearchBasicComponent } from './teacher-search-basic/teacher-search-basic.component';
import { TeacherSearchSubjectComponent } from './teacher-search-subject/teacher-search-subject.component';
import { TeacherSearchAreaComponent } from './teacher-search-area/teacher-search-area.component';
import { TeacherSearchEducationComponent } from './teacher-search-education/teacher-search-education.component';
import { TeacherSearchMusicComponent } from './teacher-search-music/teacher-search-music.component';
import { TeacherSearchInfoComponent } from './teacher-search-info/teacher-search-info.component';
import { TeacherSearchProfessionComponent } from './teacher-search-profession/teacher-search-profession.component';
import { TeacherSearchOtherComponent } from './teacher-search-other/teacher-search-other.component';
import { TeacherSearchTimeComponent } from './teacher-search-time/teacher-search-time.component';
import { TeacherSearchPresearchComponent } from './teacher-search-presearch/teacher-search-presearch.component';
import { PostToTagsService } from '../service/post-to-tags.service';
import { EducationMiddleComponent } from './education-middle/education-middle.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TeacherListComponent,
    TeacherReviewComponent,
    TeacherDetailsComponent,
    TeacherBasicComponent,
    TeacherBillComponent,
    TeacherRelaComponent,
    TeacherInfoComponent,
    TeacherSearchComponent,
    TeacherSearchBasicComponent,
    TeacherSearchSubjectComponent,
    TeacherSearchAreaComponent,
    TeacherSearchEducationComponent,
    TeacherSearchMusicComponent,
    TeacherSearchInfoComponent,
    TeacherSearchProfessionComponent,
    TeacherSearchOtherComponent,
    TeacherSearchTimeComponent,
    TeacherSearchPresearchComponent,
    EducationMiddleComponent
  ],
  entryComponents: [TeacherSearchComponent],
  providers: [PostToTagsService]
})
export class TeacherModule { }
