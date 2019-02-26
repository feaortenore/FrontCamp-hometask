import { SourceCheckGuard } from './source-check.guard';
import { Observable, of } from 'rxjs';

describe('SourceCheckGuard', () => {
  let sourceCheckGuard: SourceCheckGuard;
  let sourceService;

  beforeEach(() => {
    sourceService = new MockSourceService();
    sourceCheckGuard = new SourceCheckGuard(sourceService);
  });

  it('create an instance', () => {
    expect(sourceCheckGuard).toBeTruthy();
  });

  describe('canActivate', () => {
    let next;

    it('should return of(false) if no \'sourceID\'', () => {
      next = new MockActivatedRouteSnapshot();
      sourceCheckGuard.canActivate(next).subscribe(
        canActivate => expect(canActivate).toEqual(false)
      )
    });

    it('should return of(true) if \'sourceID\' is \'my_news\'', () => {
      next = new MockActivatedRouteSnapshot('my_news');
      sourceCheckGuard.canActivate(next).subscribe(
        canActivate => expect(canActivate).toEqual(true)
      )
    });
  });
});


class MockActivatedRouteSnapshot {
  constructor(sourceID?: string) {
    this.paramMap.sourceID = sourceID;
  }
  paramMap = {
    sourceID: undefined,
    get: function (id: string) {
      return this.sourceID;
    }
  }
}

class MockSourceService {
  public selectSource(id: string): Observable<boolean> {
    return id ? of(true) : of(false);
  }
}
