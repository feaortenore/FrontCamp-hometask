import { Injectable } from '@angular/core';
import { NewsProviderService } from './news-provider.service';
import { Source } from '../models/source.model';
import { Article } from '../models/article.model';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SourceService } from './source.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  public selectedNews?: Article;

  constructor(private newsProviderService: NewsProviderService, private sourceService: SourceService) {
  }

  public selectNews(id: string, source: Source): Observable<Article> {
    if (!source.newsList) {
      return of(null);
    }
    return source.newsList.pipe(
      map(newsList => {
        this.selectedNews = newsList.find(news => news._id === id);
        return this.selectedNews;
      }),
      catchError((err) => {
        console.error(err, 'Error selecting news.');
        return of(null);
      }),
    );
  }
}
