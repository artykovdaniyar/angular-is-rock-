import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../course';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(courses: Course[], search: string): Course[] {
    if (!search.trim()) courses;
    return courses.filter((course) => {
      return course.name.toLowerCase().includes(search.toLowerCase());
    });
  }
}
