import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from 'src/app/shared/models/author';
import { TitleCasePipe } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'course-authors',
  templateUrl: './course-authors.component.html',
  styleUrls: ['./course-authors.component.scss'],
})
export class CourseAuthorsComponent implements OnInit{
  searchName = ""
  @Input() error = false
  isAuthorListOpened = false

  @Input('authors') selectedAuthor: Author[] = []
  @Input() allAuthors$!: Observable<Author[]>
  unSelectedAuthor: Author[] = []

  @Input() isLoading = false;
  @Output() onAddAuthor: EventEmitter<Author[]> = new EventEmitter<Author[]>;
  @Output() onDeleteAuthor: EventEmitter<Author[]> = new EventEmitter<Author[]>;

  constructor( public titleCasePipe: TitleCasePipe){}
  ngOnInit(): void {
    this.allAuthors$.subscribe((authorList: Author[]) => {
      if(authorList.length){
        this.unSelectedAuthor = authorList.filter(f => !this.selectedAuthor.some(item => item.name === f.name));
      }

    })
    
  }


  deleteAuthorHandler(authorId: number) {
    let DeletedItem =  this.selectedAuthor.filter(item => item.id  === authorId )
    this.selectedAuthor = this.selectedAuthor.filter(item => item.id !== authorId)
    this.unSelectedAuthor = [ ...DeletedItem, ...this.unSelectedAuthor,]
    this.onAddAuthor.emit(this.selectedAuthor);
  }
  selectAuthorHandler(event: Event) {
    let authorName = (event.target as HTMLSelectElement).value
    let selectedItem =  this.unSelectedAuthor.filter(item => item.name  === authorName )
    this.unSelectedAuthor = this.unSelectedAuthor.filter(item => item.name !== authorName)
    this.selectedAuthor = [...this.selectedAuthor, ...selectedItem]
    this.onAddAuthor.emit(this.selectedAuthor);
  }

}
