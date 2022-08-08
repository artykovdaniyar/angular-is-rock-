import { Course } from 'src/app/shared/models/course';

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
  courseForUpdate: Course;
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
  courseForUpdate: {
    id: 0,
    name: '',
    date: '',
    length: 0,
    description: '',
    authors: [],
    isTopRated: false,
  },
};
