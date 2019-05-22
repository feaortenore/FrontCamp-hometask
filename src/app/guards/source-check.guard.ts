import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SourceService } from '../services/source.service';

@Injectable({
  providedIn: 'root',
})
export class SourceCheckGuard implements CanActivate {
  constructor(private sourceService: SourceService) { }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.sourceService.selectSource(next.paramMap.get('sourceID'))
      .pipe(
        map(source => !!source),
      );
  }
}
