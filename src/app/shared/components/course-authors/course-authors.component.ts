import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from 'src/app/shared/models/author';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'course-authors',
  templateUrl: './course-authors.component.html',
  styleUrls: ['./course-authors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseAuthorsComponent{

  @Input() error: boolean = false
  @Input() authors?: Author[] = []
  @Input() isLoading = false;

  @Output() onAddAuthor: EventEmitter<Author[]> = new EventEmitter<Author[]>;
  @Output() onDeleteAuthor: EventEmitter<Author[]> = new EventEmitter<Author[]>;

  constructor( public titleCasePipe: TitleCasePipe) {}


  deleteAuthorHandler(authorId: number) {
    this.authors = this.authors?.filter((author) => author.id !== authorId);
    this.onDeleteAuthor.emit(this.authors)
  }
  addAuthorHandler(event: Event, authorName: HTMLInputElement){
    event.preventDefault();
    if(authorName.value){
      const authorArray = authorName.value.split(" ")
      const [firstName, ...lastName] = authorArray
      const newAuthorObj = {
        id: +(Math.random() * (9 - 1) + 1).toFixed(2),
        name: this.titleCasePipe.transform(firstName),
        lastName: this.titleCasePipe.transform(lastName.join(" "))
      }
      authorName.value = ''
      this.authors?.push(newAuthorObj)
      this.onAddAuthor.emit(this.authors);
    }
  }
}
