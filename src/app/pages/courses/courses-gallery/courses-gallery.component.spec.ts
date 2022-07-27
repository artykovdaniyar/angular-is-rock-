import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesGalleryComponent } from './courses-gallery.component';

describe('CoursesGalleryComponent', () => {
  let component: CoursesGalleryComponent;
  let fixture: ComponentFixture<CoursesGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
