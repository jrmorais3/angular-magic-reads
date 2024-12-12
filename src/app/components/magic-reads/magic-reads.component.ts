import { Component } from '@angular/core';
import { FiltersComponent } from "./filters/filters.component";
import { BooksComponent } from "./books/books.component";

@Component({
  selector: 'app-magic-reads',
  imports: [FiltersComponent, BooksComponent],
  templateUrl: './magic-reads.component.html',
  standalone: true,
  styleUrl: './magic-reads.component.css'
})
export class MagicReadsComponent {

}
