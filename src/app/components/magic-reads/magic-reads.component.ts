import { HttpClientModule } from '@angular/common/http';
import { BooksService } from './books/books.component.service';
import { Component, OnInit } from '@angular/core';
import { FiltersComponent } from './filters/filters.component';
import { BooksComponent } from './books/books.component';

@Component({
  selector: 'app-magic-reads',
  imports: [FiltersComponent, BooksComponent],
  templateUrl: './magic-reads.component.html',
  standalone: true,
  styleUrl: './magic-reads.component.css',
  providers: [BooksService]
})
export class MagicReadsComponent implements OnInit {

  bookService : BooksService
  books: any;

  constructor(bookService: BooksService) {
    this.bookService = bookService;
  }

  ngOnInit(): void {

    this.books = this.bookService.getBook().subscribe((data => (
      this.books = data,
      console.log(this.books)
    )))
  }
}
