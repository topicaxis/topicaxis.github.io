import { Component, OnInit } from '@angular/core';

import { Article } from '../models/article'

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[] = [
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

  constructor() { }

  ngOnInit(): void {
  }

}
