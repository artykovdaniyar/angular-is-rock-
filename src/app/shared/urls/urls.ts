const BASE_URL = 'http://localhost:3004';
const LOGIN = `${BASE_URL}/auth/login`;
const USER_INFO = `${BASE_URL}/auth/userinfo`;
const ALL_COURSES = `${BASE_URL}/courses`;
const COURSES_PAGING = (start = 0, count = 10) =>
  `${ALL_COURSES}?start=${start}&count=${count}`;

const COURSES_LENGTH = (textFragment: string) => {
  if (textFragment) {
    return `${ALL_COURSES}/length?textFragment=${textFragment}`;
  } else {
    return `${ALL_COURSES}/length`;
  }
};

// const COURSES_LENGTH = `${ALL_COURSES}/length`;
const COURSES_SEARCH = (textFragment: string, start = 0, count = 10) =>
  `${ALL_COURSES}?textFragment=${textFragment}&start=${start}&count=${count}`;
const GET_COURSE_INFO = (courseId: number) => `${ALL_COURSES}/${courseId}`;
const CREATE_COURSE = ALL_COURSES;
const EDIT_COURSE = GET_COURSE_INFO;
const DELETE_COURSE = GET_COURSE_INFO;

export const URLS = {
  LOGIN,
  USER_INFO,
  ALL_COURSES,
  COURSES_LENGTH,
  COURSES_PAGING,
  COURSES_SEARCH,
  GET_COURSE_INFO,
  CREATE_COURSE,
  EDIT_COURSE,
  DELETE_COURSE,
};
