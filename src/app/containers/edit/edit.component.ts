import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/models/article.model';
import { MessageLogService } from 'src/app/services/message-log.service';
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
    private newsProviderService: NewsProviderService,
    private messageLogService: MessageLogService) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(() => {
      this.news = { ...this.service.selectedNews };
    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public onSave(event: Article) {
    this.newsProviderService.saveInternalNews(event)
      .subscribe(obj => this.messageLogService.message(
        `News '${event.title}' was edited`,
        JSON.stringify(obj),
      ),
      );
  }

  public onCansel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
