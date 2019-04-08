import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
  providers:[DataService]
})
export class EditBookComponent implements OnInit {
 selectedBook:Book;
  constructor(private route:ActivatedRoute,
    private dataService:DataService,
    private loggerServices:LoggerService) { }

  ngOnInit() {
    let bookID:number=parseInt(this.route.snapshot.params['id']);
    this.selectedBook=this.dataService.getBookById(bookID);
  }
  setMostPopular():void{
    this.dataService.setMostPopularBook(this.selectedBook);
    this.loggerServices.log(`New most popular book:${this.selectedBook.title}`);
  }
  saveChanges():void{
    console.warn('Save changes to book not yet implemented.');
  }
}
