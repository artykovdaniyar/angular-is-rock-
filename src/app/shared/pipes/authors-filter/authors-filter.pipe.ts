import { Pipe, PipeTransform } from '@angular/core';
import { Author } from '../../models/author';

@Pipe({
  name: 'authorFilter',
})
export class AuthorsFilterPipe implements PipeTransform {
  transform(authorList: Author[], search: string): any {
    if (!search.trim()) authorList;
    return authorList.filter((auhtor: Author) => {
      return auhtor.name.toLowerCase().includes(search.toLowerCase());
    });
  }
}
