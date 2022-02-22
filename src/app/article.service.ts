import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Article } from './models/article'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles(): Observable<Article[]> {
    return of(
      [
        {
          id: "id-1",
          title: "article title",
          url: "https://www.example.com/page-1",
          created_at: 12345678,
          source: {
            source: "example.com",
            url: "https://www.example.com"
          },
          categories: [
            {
              id: "category-1",
              category: "category name"
            }
          ],
          tags: [
            {
              id: "tag-1",
              name: "tag name"
            }
          ]
        }
      ]
    );
  }
}
