import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Source } from '../models/source.model';
import { MessageLogService } from './message-log.service';
import { NewsProviderService } from './news-provider.service';
import { SourceProviderService } from './source-provider.service';

@Injectable({
  providedIn: 'root',
})
export class SourceService {
  public sources: Observable<Source[]>;
  public selectedSource?: Source;

  private readonly internalSource: Source = {
    id: 'my_news',
    description: 'News added by client',
    isInternal: true,
    name: 'My News',
  };

  constructor(
    sourceProviderService: SourceProviderService,
    private newsProviderService: NewsProviderService,
    private messageLogService: MessageLogService) {
    this.sources = sourceProviderService.getExternalSources()
      .pipe(
        map(sources => {
          sources.push(this.internalSource);

          return sources;
        }),
      );
  }

  public selectSource(id: string): Observable<Source> {
    return this.sources.pipe(
      map(sources => {
        const index = sources.findIndex(source => source.id === id);
        if (index !== -1) {
          this.selectedSource = sources[index];
          this.getNewsList(this.selectedSource);

          return this.selectedSource;
        } else {
          return new Error();
        }
      }),
      catchError(err => {
        this.messageLogService.error(
          err,
          `Error while selecting sourse '${id}'.`,
        );

        return of(undefined);
      }),
    );
  }

  private getNewsList(source: Source): void {
    if (!source.newsList) {
      source.newsList = this.newsProviderService.getNews(source);
    }
  }
}
