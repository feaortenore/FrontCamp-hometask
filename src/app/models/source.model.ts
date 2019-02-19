import { Article } from './article.model';
import { Observable } from 'rxjs';

export interface Source {
    id: string,
    name: string,
    description: string,
    url?: string,
    category?: string,
    language?: string,
    country?: string,
    isInternal?: boolean,
    newsList?: Observable<Article[]>
};
