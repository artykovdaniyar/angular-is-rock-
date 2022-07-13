import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseDateComponent } from './edit-course-date.component';

describe('AddCourseDateComponent', () => {
  let component: AddCourseDateComponent;
  let fixture: ComponentFixture<AddCourseDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCourseDateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCourseDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
