import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NewsProviderService } from 'src/app/services/news-provider.service';
import { SourceService } from 'src/app/services/source.service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.sass'],
})
export class NewsListComponent implements OnInit, OnDestroy {
  public filter = '';
  public newsList: Article[];
  private sub: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public service: SourceService,
    private newsProviderService: NewsProviderService) { }

  public updateNewsList(): void {
    this.newsList = undefined;
    this.service.selectedSource.newsList.subscribe(
      newsList => this.newsList = newsList,
    );
  }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(() => {
      this.updateNewsList();
    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public onFilter(event: string) {
    this.filter = event;
  }

  public onDelete(event: string) {
    this.newsProviderService.deleteInternalNews(event)
      .subscribe(obj => {
        console.log(obj);
        this.updateNewsList();
      });
  }

  public onEdit(event: string) {
    this.router.navigate([event, 'edit'], { relativeTo: this.route });
  }
}
