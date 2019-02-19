import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { NewsService } from '../services/news.service';
import { SourceService } from '../services/source.service';

@Injectable({
  providedIn: 'root'
})
export class SourceCheckGuard implements CanActivate {
  constructor(private sourceService: SourceService) {  };

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return  this.sourceService.selectSource(next.paramMap.get('sourceID'));
  }
}
