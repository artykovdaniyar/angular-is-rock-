import { Course } from '../../../../shared/models/course';

export interface CoursesState {
  courses: Course[];
  startWith: number;
  coursesPerPage: number;
  loading: boolean;
  allCoursesLoaded: boolean;
  error: boolean;
  totalCourseNum: number;
  dataIsEmpty: boolean;
  coursesNoFound: boolean;
}
export const initialCoursesState: CoursesState = {
  courses: [],
  startWith: 0,
  coursesPerPage: 10,
  loading: false,
  allCoursesLoaded: false,
  error: false,
  totalCourseNum: 0,
  dataIsEmpty: false,
  coursesNoFound: false,
};
