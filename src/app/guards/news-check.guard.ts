import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { NewsService } from '../services/news.service';
import { map } from 'rxjs/operators';
import { SourceService } from '../services/source.service';

@Injectable({
  providedIn: 'root'
})
export class NewsCheckGuard implements CanActivate {
  constructor(private newsService: NewsService, private sourceService: SourceService) { };

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.newsService.selectNews(next.paramMap.get('newsID'), this.sourceService.selectedSource);
  }
}
