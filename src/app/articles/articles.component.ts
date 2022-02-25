import { Component, OnInit } from '@angular/core';

import { Article } from '../models/article'
import { ArticleService } from '../article.service'

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[] = [];
  nextPage?: string;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService.getArticles(this.nextPage).subscribe(
      articles => {
        this.articles = this.articles.concat(articles.articles);
        this.nextPage = articles.next_page;
      }
    );
  }

}