import { Article } from './article'

export interface Articles {
    articles: Article[];
    next_id?: string;
}
