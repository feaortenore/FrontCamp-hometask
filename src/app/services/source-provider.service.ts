import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Source } from '../models/source.model';

@Injectable({
  providedIn: 'root',
})
export class SourceProviderService {

  constructor(private httpClient: HttpClient) { }

  public getExternalSources(): Observable<Source[]> {
    return this.httpClient
      .get<{ sources: Source[], status: string }>(
        `https://newsapi.org/v2/sources?apiKey=${environment.newsApiKey}`,
      )
      .pipe(
        map(response => response.sources),
      );
  }
}
