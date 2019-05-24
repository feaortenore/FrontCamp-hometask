import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/models/article.model';
import { MessageLogService } from 'src/app/services/message-log.service';
import { NewsProviderService } from 'src/app/services/news-provider.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
})
export class CreateComponent implements OnInit, OnDestroy {
  public news: Article;
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsProviderService: NewsProviderService,
    private messageLogService: MessageLogService) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(() => this.resetNews());
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public onSave(event: Article) {
    this.newsProviderService.saveInternalNews(event)
      .subscribe(obj => {
        this.messageLogService.message(
          `News '${event.title}' was saved`,
          JSON.stringify(obj),
        );
        this.resetNews();
      },
      );
  }

  public onCansel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private resetNews() {
    this.news = {
      author: '',
      content: '',
      description: '',
      publishedAt: '',
      title: '',
      url: '',
      urlToImage: '',
    };
  }
}
