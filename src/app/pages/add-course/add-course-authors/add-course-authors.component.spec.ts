import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseAuthorsComponent } from './add-course-authors.component';

describe('AddCourseAuthorsComponent', () => {
  let component: AddCourseAuthorsComponent;
  let fixture: ComponentFixture<AddCourseAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseAuthorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCourseAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
