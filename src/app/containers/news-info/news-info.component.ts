import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { NewsProviderService } from 'src/app/services/news-provider.service';
import { NewsService } from 'src/app/services/news.service';
import { SourceService } from 'src/app/services/source.service';

@Component({
  selector: 'app-news-info',
  templateUrl: './news-info.component.html',
  styleUrls: ['./news-info.component.sass'],
})
export class NewsInfoComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public newsService: NewsService,
    public sourceService: SourceService,
    private newsProviderService: NewsProviderService) {
  }

  public onDelete(event: Article) {
    this.newsProviderService.deleteInternalNews(event)
      .subscribe(() => this.router.navigate(
        ['../'],
        { relativeTo: this.route }));
  }

  public onEdit(event: Article) {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
