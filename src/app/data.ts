import { Reader } from './models/reader';
import { Book } from './models/book';

export const allReaders: Reader[]=[
    {readerID:1, name:'Marie',weaklyReadingGoal:400,totalMinutesRead:5600},
    {readerID:2, name:'Daniel',weaklyReadingGoal:210,totalMinutesRead:3000},
    {readerID:3, name:'Lanier',weaklyReadingGoal:140,totalMinutesRead:600}
];
export const allBooks:Book[]=[
    {bookID:1, title:'Goodnight Moon',author:'Margaret wise brown',publicationYear:1959},
    {bookID:2, title:'Green Eggs and ham',author:'Dr. seuss',publicationYear:1960},
    {bookID:3, title:'Where the wild things are',author:'Mauric sendak',publicationYear:1965},
    {bookID:4, title:'The Hobbit',author:'J.R.R Tolkien',publicationYear:1937},
    {bookID:5, title:'Curious George',author:'H.A.Rey',publicationYear:1941},
    {bookID:6, title:'Alice Adventure in Wonderland',author:'Lewis Carroll',publicationYear:1955}
];
