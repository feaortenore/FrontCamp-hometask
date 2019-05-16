import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Article } from '../../models/article.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SourceService } from 'src/app/services/source.service';
import { NewsProviderService } from 'src/app/services/news-provider.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.sass']
})
export class NewsListComponent implements OnInit, OnDestroy {
  public filter = '';
  public newsList: Article[];
  private sub: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public service: SourceService,
    private newsProviderService: NewsProviderService) { }

  updateNewsList(): void {
    this.newsList = undefined;
    this.service.selectedSource.newsList.subscribe(
      newsList => this.newsList = newsList
    );
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(() => {
      this.updateNewsList();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onFilter(event: string) {
    this.filter = event;
  }

  public onDelete(event: string) {
    this.newsProviderService.deleteInternalNews(event)
      .subscribe((obj) => {
        console.log(obj);
        this.updateNewsList();
      });
  }

  public onEdit(event: string) {
    this.router.navigate([event, 'edit'], { relativeTo: this.route });
  }
}
