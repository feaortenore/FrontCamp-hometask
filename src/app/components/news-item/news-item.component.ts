import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../../models/article.model';
import { Source } from '../../models/source.model';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.sass'],
})
export class NewsItemComponent {
  @Input() public news: Article;
  @Input() public source: Source;
  @Input() public isFull: boolean;
  @Output() public delete: EventEmitter<string> = new EventEmitter();
  @Output() public edit: EventEmitter<string> = new EventEmitter();
  public routeToEditPage: string[] = ['edit'];

  public onDelete() {
    this.delete.emit(this.news._id);
  }

  public onEdit() {
    this.edit.emit(this.news._id);
  }
}
