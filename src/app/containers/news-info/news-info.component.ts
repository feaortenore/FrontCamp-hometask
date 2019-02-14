import { Component, OnInit } from '@angular/core';
import { News } from '../../models/news.model';
import { news } from '../../data/news';
import { ActivatedRoute, Router } from '@angular/router';
import { Source } from '../../models/source.model';

@Component({
  selector: 'app-news-info',
  templateUrl: './news-info.component.html',
  styleUrls: ['./news-info.component.sass']
})
export class NewsInfoComponent implements OnInit {
  public news: News;
  public source: Source
  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let sourceInfo = news.find(source => source.id === params['sourceID']);
      if(!sourceInfo){
        this.router.navigate(['/my_news']);
      } else {
        this.news = sourceInfo.list.find(news => news.id === params['newsID']);
        if(!this.news){
          this.router.navigate(['/', sourceInfo.id]);
        } else {
          this.source = { 
            isInternal: sourceInfo.isInternal,
            name: sourceInfo.name,
            id: sourceInfo.id
          };
        }
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
