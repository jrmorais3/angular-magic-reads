import { Component, OnInit, Input } from '@angular/core';
import { Book } from './model/Book';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
  providers: [CurrencyPipe],
})
export class BookComponent implements OnInit {
  @Input()
  book!:Book;

  constructor() {}

  ngOnInit(): void {
    // if (!this.book) {
    //   this.book = new Book();
    // }
  }
}
