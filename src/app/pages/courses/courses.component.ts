import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Course } from '../../shared/models/course';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit, OnDestroy {
  searchValue = '';
  totalCourseNum = 0;
  isLoading = false;
  isAllCourseLoaded = false;
  courses: Course[] = [];

  coursesSubs!: Subscription;
  courseTotalNumSubs!: Subscription;
  isAllCoursesLoadedSubs!: Subscription;
  isLoadingSubs!: Subscription;

  constructor(private courseService: CoursesService) {}

  ngOnInit(): void {
    this.coursesSubs = this.coursesSubs = this.courseService
      .getCourses()
      .subscribe((courses) => {
        this.courses = courses;
      });

    this.courseTotalNumSubs = this.courseService
      .getTotalCoursesNum()
      .subscribe((num) => {
        this.totalCourseNum = num;
      });

    this.isAllCoursesLoadedSubs =
      this.courseService.isAllCoursesLoaded$.subscribe((state) => {
        this.isAllCourseLoaded = state;
      });

    this.isLoadingSubs = this.courseService.isLoading$.subscribe((state) => {
      this.isLoading = state;
    });
  }

  loadMore(): void {
    this.courseService.loadMoreCourses();
  }
  searchHandler(searchValue: string): void {
    this.searchValue = searchValue;
  }
  deleteCourseHandler(courseForDelete: Course): void {
    this.courseService.removeCourse(courseForDelete);
  }
  ngOnDestroy(): void {
    this.coursesSubs.unsubscribe();
    this.courseTotalNumSubs.unsubscribe();
    this.isAllCoursesLoadedSubs.unsubscribe();
    this.isLoadingSubs.unsubscribe();
  }
}
