import { Component, OnInit } from '@angular/core';
import {BookService} from "../services/book/book.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  books:String[]=[]
  constructor(private bookService: BookService){}
  ngOnInit(): void{
    this.books = this.bookService.getAll();
  }
}
