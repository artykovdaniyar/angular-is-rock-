import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from 'src/app/shared/models/author';
import { TitleCasePipe } from '@angular/common';
import { Observable, take } from 'rxjs';
import { FormControl, FormGroupDirective } from '@angular/forms';



@Component({
  selector: 'course-authors',
  templateUrl: './course-authors.component.html',
  styleUrls: ['./course-authors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseAuthorsComponent implements OnInit{
  searchName = ""
  unSelectedAuthor: Author[] = []
  isAuthorListOpened = false
  authors!: FormControl;
  
  @Input('authors') selectedAuthor: Author[] = []
  @Input() allAuthors$!: Observable<Author[]>
  @Input() error = false
  @Input() isLoading = false;
  @Output() onAddAuthor: EventEmitter<Author[]> = new EventEmitter<Author[]>;
  @Output() onDeleteAuthor: EventEmitter<Author[]> = new EventEmitter<Author[]>;

  constructor( public titleCasePipe: TitleCasePipe, private formGroupDirective: FormGroupDirective){}

  ngOnInit(): void {
    this.authors = this.formGroupDirective.control.get('authors') as FormControl;
    

    this.allAuthors$.pipe(
      take(2)
    ).subscribe((authorList: Author[]) => {
      if(authorList.length){
        this.unSelectedAuthor = authorList.filter(f => !this.selectedAuthor.some(item => item.name === f.name));
      }
    })
  }
  deleteAuthorHandler(authorId: number) {
    let DeletedItem =  this.selectedAuthor.filter(item => item.id  === authorId )
    this.selectedAuthor = this.selectedAuthor.filter(item => item.id !== authorId)
    this.unSelectedAuthor = [ ...DeletedItem, ...this.unSelectedAuthor,]
    this.authors?.patchValue(this.selectedAuthor);
  }
  selectAuthorHandler(event: Event) {
    let authorName = (event.target as HTMLSelectElement).value
    let selectedItem =  this.unSelectedAuthor.filter(item => item.name  === authorName )
    this.unSelectedAuthor = this.unSelectedAuthor.filter(item => item.name !== authorName)
    this.selectedAuthor = [...this.selectedAuthor, ...selectedItem]
    this.authors?.patchValue(this.selectedAuthor);
  }
  searchAuthors(auhtorName: string){
    if(auhtorName){
      this.isAuthorListOpened = true
    }
  }

}
