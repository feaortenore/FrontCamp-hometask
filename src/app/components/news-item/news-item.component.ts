import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { News } from '../../models/news.model';
import { Source } from '../../models/source.model';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.sass']
})
export class NewsItemComponent implements OnInit {
  @Input() public news: News;
  @Input() public source: Source;
  @Output() delete: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit(this.news.id);
  }
}
