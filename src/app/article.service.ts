import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Articles } from './models/articles'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(page?: string): Observable<Articles> {
    var args = {};
    if (page) {
      args["params"] = {
        page: page
      };
    }

    return this.http.get<Articles>("https://api.topicaxis.com/v1/articles", args);
  }

}
