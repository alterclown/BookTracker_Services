import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';

import { AddReaderComponent } from './add-reader/add-reader.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { EditReaderComponent } from './edit-reader/edit-reader.component';
import { LoggerService } from './services/logger.service';
import { DataService } from './services/data.service';
import { PlainLoggerService } from './services/plain-logger.service';
import { dataServiceFactory } from './services/data.service.factory';

@NgModule({
  declarations: [
    AppComponent,
    AddReaderComponent,
    DashboardComponent,
    EditBookComponent,
    EditReaderComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // { provide:LoggerService,useClass:PlainLoggerService},
  //   { provide:LoggerService,useValue:{
  //     log:(message)=>console.log(`Message:${message}`),
  //     error: (message)=>console.error(`Problem:${message}`)
      
  //   }},
  //  {provide: DataService, useFactory:dataServiceFactory,deps:[LoggerService]} 

  LoggerService,DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
