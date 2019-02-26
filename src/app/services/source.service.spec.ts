import { SourceService } from './source.service';
import { Article } from '../models/article.model';
import { Observable, of } from 'rxjs';
import { Source } from '../models/source.model';
import { mockExternalSources } from '../mocks/externalSources';
import { mockInternalNews } from '../mocks/internalNews';
import { mockExternalNews } from '../mocks/externalNews';

describe('SourceService', () => {
  let sourceService: SourceService;
  let sourceProviderService;
  let newsProviderService;

  beforeEach(() => {
    sourceProviderService = new MockSourceProviderService();
    newsProviderService = new MockNewsProviderService();
    sourceService = new SourceService(sourceProviderService, newsProviderService);
  });

  it('create an instance', () => {
    expect(sourceService).toBeTruthy();
  });

  it('providing sources contain 5 sources', () => {
    sourceService.sources.subscribe(
      sources => expect(sources.length).toEqual(mockExternalSources.length + 1)
    )
  });


  describe('selectSource', () => {
    it('providing internal source which become \'selectedSource\'', () => {
      sourceService.sources.subscribe(
        sources => {
          sourceService.selectSource(sources[0].id).subscribe(
            () => expect(sourceService.selectedSource.id).toBe(sources[0].id)
          )
        }
      )
    });

    it('providing internal source which become source whith internal news list', () => {
      sourceService.sources.subscribe(
        sources => {
          sourceService.selectSource(sources[mockExternalSources.length].id).subscribe(
            () => sources[mockExternalSources.length].newsList.subscribe(
              news => expect(news[0].title).toBe('internal')
            )
          )
        }
      )
    });

    it('providing external source which become \'selectedSource\'', () => {
      sourceService.sources.subscribe(
        sources => {
          let selectId = sources[0].id;
          sourceService.selectSource(selectId).subscribe(
            () => expect(sourceService.selectedSource.id).toBe(selectId)
          )
        }
      )
    });

    it('providing external source which become source whith external news list', () => {
      sourceService.sources.subscribe(
        sources => {
          let selectId = sources[0].id;
          sourceService.selectSource(selectId).subscribe(
            () => sources[0].newsList.subscribe(
              news => expect(news[0].title).toBe('external')
            )
          )
        }
      )
    });
  })
});

class MockSourceProviderService {
  public getExternalSources(): Observable<Source[]> {
    return of(mockExternalSources.slice());
  }
}

class MockNewsProviderService {
  public getInternalNews(): Observable<Article[]> {
    return of(mockInternalNews.slice());
  }
  public getExternalNews(source: Source): Observable<Article[]> {
    return of(mockExternalNews.slice());
  }
}
