import { Component, OnInit } from '@angular/core';
import { Reader } from '../models/reader';
import { ActivatedRoute } from '@angular/router';
import { allReaders } from '../data';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-edit-reader',
  templateUrl: './edit-reader.component.html',
  styleUrls: ['./edit-reader.component.css']
})
export class EditReaderComponent implements OnInit {
  selectedReader: Reader;

  constructor(private route: ActivatedRoute,
    private dataService:DataService) { }

  ngOnInit() {
    let readerID: number=parseInt(this.route.snapshot.params['id']);
    this.selectedReader=this.dataService.getReaderById(readerID);
  }

}
