import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/shared/models/course';

@Pipe({
  name: 'filter',
})
export class CoursesFilterPipe implements PipeTransform {
  transform(courses: Course[], search: string): Course[] {
    if (!search.trim()) courses;
    return courses.filter((course) => {
      return course.name.toLowerCase().includes(search.toLowerCase());
    });
  }
}
