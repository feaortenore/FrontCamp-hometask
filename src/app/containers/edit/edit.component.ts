import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { NewsProviderService } from 'src/app/services/news-provider.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit, OnDestroy {
  public news: Article;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public service: NewsService,
    private newsProviderService: NewsProviderService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(() => {
      this.news = Object.assign({}, this.service.selectedNews);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public onSave(event: Article) {
    console.log(event);
    this.newsProviderService.saveInternalNews(event).subscribe(
      (obj) => {
        console.log(obj);
      }
    );
  }

  public onCansel() {
    console.log(this.route);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
