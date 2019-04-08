import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { DataService } from '../services/data.service';
import { Book } from '../models/book';
import { Reader } from '../models/reader';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  allBooks:Book[];
  allReaders: Reader[];
  mostPopularBook:Book;
 
  constructor(private loggerService:LoggerService,
    private dataService:DataService) { 
    this.loggerService.log('Creating the dashboard');
  }

  ngOnInit() {
  this.allBooks=this.dataService.getAllBooks();
  this.allReaders=this.dataService.getAllReaders();
  this.mostPopularBook=this.dataService.mostPopularBook;
  }
  deleteBook(bookID:number):void{
    console.warn(`Delete book not yet implemented(bookID:${bookID}.)`);
  }
  deleteReader(readerID:number):void{
    console.warn(`Delete reader not yet implemented(readerID:${readerID}.)`);
  }

}
