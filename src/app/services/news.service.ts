import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Article } from '../models/article.model';
import { Source } from '../models/source.model';
import { MessageLogService } from './message-log.service';

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  public selectedNews?: Article;

  constructor(private messageLogService: MessageLogService) { }

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
        this.messageLogService.error(
          err,
          `Error selecting news ${id} for '${source.name}'.`,
        );

        return of(undefined);
      }),
    );
  }
}
