import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { ActivatedRoute, Router } from '@angular/router';
import { news } from 'src/app/data/news';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {
  public news: News = {
    id: '',
    heading: ''
  };
  private sub: any;
  public type: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if(params['sourceID'] && params['newsID']){
        let sourceInfo = news.find(source => source.id === params['sourceID']);
        if(!sourceInfo){
          this.router.navigate(['/my_news']);
        } else if(!sourceInfo.isInternal) {
          this.router.navigate(['/', sourceInfo.id, params['newsID']]);
        } else {
          let news = sourceInfo.list.find(news => news.id === params['newsID']);
          if(!news){
            this.router.navigate(['/', sourceInfo.id]);
          } else {
            this.type = "Edit";
            this.news = Object.assign({}, news);
          }
        }
      } else {
        this.type = "Create";
        this.news = {
          id: '',
          heading: ''
        }
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }




}
