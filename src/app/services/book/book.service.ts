import { Injectable } from '@angular/core';
import {Book} from "../../shared/model/Book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() {
  }

  getAll(): Book[] {
    return [
      {
        id: 1,
        name: "Шерлок Холмс",
        imageUrl:"/assets/images/books/book-1.jpg",
        paged: 345,
        genre:"Детектив"
      },
      {
        id: 2,
        name: "Книга эмоций",
        imageUrl:"/assets/images/books/book-2.jpg",
        paged: 1000,
        genre:"Психология, саморазвитие"
      },
      {
        id: 3,
        name: "Ведьмак",
        imageUrl:"/assets/images/books/book-3.jpg",
        paged: 2000,
        genre:"Фэнтези"
      }
    ]
  }
}
