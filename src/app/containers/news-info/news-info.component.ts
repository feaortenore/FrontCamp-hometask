import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { SourceService } from 'src/app/services/source.service';
import { NewsProviderService } from 'src/app/services/news-provider.service';

@Component({
  selector: 'app-news-info',
  templateUrl: './news-info.component.html',
  styleUrls: ['./news-info.component.sass']
})
export class NewsInfoComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public newsService: NewsService,
    public sourceService: SourceService,
    private newsProviderService: NewsProviderService) {
  }

  public onDelete(event: string) {
    this.newsProviderService.deleteInternalNews(event)
      .subscribe((obj) => {
        console.log(obj);
        this.router.navigate(['../'], { relativeTo: this.route });
      });
  }

  public onEdit(event: string) {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
