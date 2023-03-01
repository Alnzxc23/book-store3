import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  getAll():String[]{
 return[
   '/assets/images/books/image1.jpg',
   '/assets/images/books/image2.jpg',
   '/assets/images/books/image3.jpg',
 ]

  }
}
