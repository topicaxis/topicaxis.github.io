/*
{
      "id": "YXJkNLgl1jeKXXxbrZnVA4K9",
      "url": "https://codescene.com/blog/bumpy-road-code-complexity-in-context/",
      "title": "Cyclomatic complexity - a fresh look at code complexity｜Blog",
      "created_at": 1645549438,
      "source": {
        "name": "codescene.com",
        "url": "https://codescene.com"
      },
      "categories": [
        {
          "id": "YdV8vwGmKabzJbM2L5ZRyOnl",
          "name": "programming"
        }
      ],
      "tags": [
        {
          "id": "L75xvw9eN1QpLQJaozng2K06",
          "name": "Python"
        }
      ]
    }
*/

import { Source } from './source'
import { Category } from './category'
import { Tag } from './tag'

export interface Article {
    id: string;
    url: string;
    title: string;
    created_at: number;
    source: Source;
    categories: Category[];
    tags: Tag[];
}
