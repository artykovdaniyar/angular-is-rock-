import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAuthorsComponent } from './course-authors.component';

describe('CourseAuthorComponent', () => {
  let component: CourseAuthorsComponent;
  let fixture: ComponentFixture<CourseAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseAuthorsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
