import { Injectable } from '@angular/core';
import { Source } from '../models/source.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../models/article.model';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class NewsProviderService {

  constructor(private httpClient: HttpClient) { }

  private getNews(link: string): Observable<Article[]> {
    return this.httpClient
      .get<{articles: Article[], status: string}>(link)
      .pipe(
        map(response => {
          response.articles.forEach((article, index) => { 
            if(!article._id) {
              article._id = 'news_'+index ;
            }
            article.publishedAt = new Date(article.publishedAt || new Date());
          });
          return response.articles;
        }),
        catchError((err) =>{
          console.error(err, 'Error retrieving news.');
          return of([]);
        }),
      );
  }

  public getExternalNews(source: Source): Observable<Article[]> {
    return this.getNews(
      `https://newsapi.org/v2/top-headlines?apiKey=${environment.newsApiKey}&sources=${source.id}`
    );
  }

  public getInternalNews(): Observable<Article[]> {
    return this.getNews(
      `${environment.internalNews}`
    );
  }

  public deleteInternalNews(id: string): Observable<Object> {
    return this.httpClient.delete(`${environment.internalNews}/delete${id}`, { responseType: 'text' });
  }

  public saveInternalNews(news: Article): Observable<Object> {
    return this.httpClient.put(`${environment.internalNews}`, news, { responseType: 'text' });
  }
}
