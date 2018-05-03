import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSearchMusicComponent } from './teacher-search-music.component';

describe('TeacherSearchMusicComponent', () => {
  let component: TeacherSearchMusicComponent;
  let fixture: ComponentFixture<TeacherSearchMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSearchMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSearchMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
