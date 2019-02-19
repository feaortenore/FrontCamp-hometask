import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../models/article.model';
import { Source } from '../../models/source.model';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.sass']
})
export class NewsItemComponent implements OnInit {
  @Input() public news: Article;
  @Input() public source: Source;
  @Input() public isFull: boolean;
  @Output() delete: EventEmitter<string> = new EventEmitter();
  @Output() edit: EventEmitter<string> = new EventEmitter();
  public routeToEditPage: string[] = ['edit'];

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit(this.news._id);
  }

  onEdit() {
    this.edit.emit(this.news._id);
  }
}
