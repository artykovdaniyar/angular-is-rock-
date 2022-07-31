import { Course } from '../../../../shared/models/course';

export interface CoursesState {
  courses: Course[];
  loading: boolean;
  loaded: boolean;
}
export const initialCoursesState: CoursesState = {
  courses: [],
  loading: false,
  loaded: false,
};
