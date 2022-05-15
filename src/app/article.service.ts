import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Articles } from './models/articles'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(nextPage?: string): Observable<Articles> {
    var args = {};
    if (nextPage) {
      args["params"] = {
        next_page: nextPage
      };
    }

    return this.http.get<Articles>("https://api.topicaxis.com/v1/articles", args);
  }

}
