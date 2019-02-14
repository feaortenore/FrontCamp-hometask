import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../models/news.model';
import { ActivatedRoute, Router } from '@angular/router';
import { news } from '../../data/news'
import { Source } from '../../models/source.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.sass']
})
export class NewsListComponent implements OnInit {
  public source: Source;
  public filter: string = '';
  public filteredNews: News[];
  private sub: any;
  
  constructor(private route: ActivatedRoute, private router: Router) {}

  filterNews(filter: string): News[] {
    return this.source.list.filter(
      news => news.heading.indexOf(filter) !== -1
    );
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.source = news.find((source) => source.id === params['sourceID']);
      if(!this.source){
        this.router.navigate(['/my_news']);
      } else {
        this.filteredNews = this.filterNews(this.filter);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onFilter(event) {
    this.filter = event;
    this.filteredNews = this.filterNews(event);
  }

}
