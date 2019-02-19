import { Injectable } from '@angular/core';
import { Source } from '../models/source.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../models/article.model';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

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
      `https://newsapi.org/v2/top-headlines?apiKey=1d143d74c3f949b287751439d8842708&sources=${source.id}`
    );
  }

  public getInternalNews(): Observable<Article[]> {
    return this.getNews(
      `http://localhost:3000/news`
    );
  }

  public deleteInternalNews(id: string): Observable<Object> {
    return this.httpClient.delete(`http://localhost:3000/news/delete${id}`, { responseType: 'text' });
  }

  public saveInternalNews(news: Article): Observable<Object> {
    return this.httpClient.put(`http://localhost:3000/news`, news, { responseType: 'text' });
  }
}
