import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseErrorComponent } from './course-error.component';

describe('CourseErrorComponent', () => {
  let component: CourseErrorComponent;
  let fixture: ComponentFixture<CourseErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
