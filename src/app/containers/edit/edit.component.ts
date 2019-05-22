import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/models/article.model';
import { NewsProviderService } from 'src/app/services/news-provider.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass'],
})
export class EditComponent implements OnInit, OnDestroy {
  public news: Article;
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public service: NewsService,
    private newsProviderService: NewsProviderService) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(() => {
      this.news = { ...this.service.selectedNews };
    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public onSave(event: Article) {
    console.log(event);
    this.newsProviderService.saveInternalNews(event)
      .subscribe(obj => {
        console.log(obj);
      },
      );
  }

  public onCansel() {
    console.log(this.route);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
