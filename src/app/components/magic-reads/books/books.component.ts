import { Component, OnInit } from '@angular/core';
import { BookComponent } from "./book/book.component";
import { BooksService } from './books.component.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  imports: [BookComponent, CommonModule],
  standalone: true,
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {

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
