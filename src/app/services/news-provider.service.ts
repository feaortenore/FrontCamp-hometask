import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Article } from '../models/article.model';
import { Source } from '../models/source.model';
import { MessageLogService } from './message-log.service';

@Injectable({
  providedIn: 'root',
})
export class NewsProviderService {

  constructor(
    private httpClient: HttpClient,
    private messageLogService: MessageLogService) { }

  public deleteInternalNews(news: Article): Observable<void> {
    return this.httpClient.delete(
      `${environment.internalNews}/delete${news._id}`,
      { responseType: 'text' })
    .pipe(
      map(
        obj => this.messageLogService.message(
          `News '${news.title}' was deleted`,
          JSON.stringify(obj),
        ),
      ),
      catchError(
        err => of(this.messageLogService.error(
          err,
          `Error while deleting '${news.title}' news`,
        )),
      ),
    );
  }

  public saveInternalNews(news: Article): Observable<Object> {
    return this.httpClient.put(
      `${environment.internalNews}`,
      news,
      { responseType: 'text' },
    );
  }

  public getNews(source: Source): Observable<Article[]> {
    const link = source.isInternal ?
      `${environment.internalNews}` :
      'https://newsapi.org/v2/top-headlines'
      + `?apiKey=${environment.newsApiKey}&sources=${source.id}`;

    return this.httpClient
      .get<{ articles: Article[], status: string }>(link)
      .pipe(
        map(response => {
          response.articles.forEach((article, index) => {
            if (!article._id) {
              article._id = `news_${index}`;
            }
            article.publishedAt = new Date(article.publishedAt || new Date());
          });

          return response.articles;
        }),
        catchError(err => {
          this.messageLogService.error(
            err,
            `Error retrieving news for '${source.name}'.`,
          );

          return of([]);
        }),
      );
  }
}
