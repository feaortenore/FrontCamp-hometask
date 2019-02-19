import { Injectable } from '@angular/core';
import { SourceProviderService } from './source-provider.service';
import { Observable, of } from 'rxjs';
import { Source } from '../models/source.model';
import { map, catchError } from 'rxjs/operators';
import { NewsProviderService } from './news-provider.service';

@Injectable({
  providedIn: 'root'
})
export class SourceService {

  private readonly internalSource: Source = {
    id: 'my_news',
    description: "News added by client",
    isInternal: true,
    name: "My News"
  };
  public sources: Observable<Source[]>;
  public selectedSource?: Source;

  constructor(sourceProviderService: SourceProviderService, private newsProviderService: NewsProviderService) {
    this.sources = sourceProviderService.getExternalSources().pipe(
      map(
        (sources) => {
          sources.push(this.internalSource);
          return sources;
        })
    );
  }

  public selectSource(id: string): Observable<boolean> {
    return this.sources.pipe(
      map((sources) => {
        let source = sources.find(source => source.id === id)
        if (source) {
          this.selectedSource = source;
          this.getNewsList(source);
        }
        return !!source;
      }),
      catchError((err) =>{
        console.error(err, 'Error select sourse.');
        return of(false);
      }),
    );
  }

  private getNewsList(source: Source): void {
    if (!source.newsList) {
      source.newsList = source.isInternal ?
        this.newsProviderService.getInternalNews() :
        this.newsProviderService.getExternalNews(source)
    };
  }
}
