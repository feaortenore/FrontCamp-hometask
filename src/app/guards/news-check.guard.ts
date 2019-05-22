import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewsService } from '../services/news.service';
import { SourceService } from '../services/source.service';

@Injectable({
  providedIn: 'root',
})
export class NewsCheckGuard implements CanActivate {
  constructor(private newsService: NewsService,
              private sourceService: SourceService) { }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.newsService.selectNews(
      next.paramMap.get('newsID'),
      this.sourceService.selectedSource)
      .pipe(
        map(news => !!news),
      );
  }
}
