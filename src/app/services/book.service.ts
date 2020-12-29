import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }
  getBookList(value):Observable<any>{
    console.log(value);
    
    return this.httpClient.get('https://www.googleapis.com/books/v1/volumes?q='+value)

  }
}
