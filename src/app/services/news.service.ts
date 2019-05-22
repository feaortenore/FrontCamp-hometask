import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Article } from '../models/article.model';
import { Source } from '../models/source.model';
import { NewsProviderService } from './news-provider.service';
import { SourceService } from './source.service';

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  public selectedNews?: Article;

  public selectNews(id: string, source: Source): Observable<Article> {
    if (!source.newsList) {
      return of(undefined);
    }

    return source.newsList.pipe(
      map(newsList => {
        this.selectedNews = newsList.find(news => news._id === id);

        return this.selectedNews;
      }),
      catchError(err => {
        console.error(err, 'Error selecting news.');

        return of(undefined);
      }),
    );
  }
}
