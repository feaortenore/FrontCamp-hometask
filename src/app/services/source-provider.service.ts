import { Injectable } from '@angular/core';
import { Source } from '../models/source.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SourceProviderService {

  constructor(private httpClient: HttpClient) { }

  public getExternalSources(): Observable<Source[]> {
    return this.httpClient
      .get<{sources: Source[], status: string}>(`https://newsapi.org/v2/sources?apiKey=1d143d74c3f949b287751439d8842708`)
      .pipe(
        map(response => response.sources)
      );
  }
}
