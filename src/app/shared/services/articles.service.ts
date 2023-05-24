import { Injectable } from '@angular/core';
import { Story } from "../interfaces/article";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }

  getTopArticles(): Observable<Partial<Story>[]> {
    return of([
      { title: 'Article 1',}
    ])
  }
}
