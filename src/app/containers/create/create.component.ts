import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsProviderService } from 'src/app/services/news-provider.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit, OnDestroy {
  public news: Article;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsProviderService: NewsProviderService) { }

  private resetNews() {
    this.news = {
      author: '',
      content: '',
      description: '',
      publishedAt: '',
      title: '',
      url: '',
      urlToImage: ''
    };
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(() => this.resetNews());
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public onSave(event: Article) {
    this.newsProviderService.saveInternalNews(event).subscribe(
      (obj) => {
        console.log(obj);
        this.resetNews();
      }
    );
  }

  public onCansel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
