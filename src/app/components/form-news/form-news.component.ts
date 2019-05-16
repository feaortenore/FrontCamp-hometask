import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-form-news',
  templateUrl: './form-news.component.html',
  styleUrls: ['./form-news.component.sass']
})
export class FormNewsComponent implements OnChanges {
  @Input() public news: Article;
  @Output() save: EventEmitter<Article> = new EventEmitter();
  @Output() cansel: EventEmitter<any> = new EventEmitter();

  public newsForm: FormGroup;
  private datePipe = new DatePipe('en-US');

  constructor(fb: FormBuilder) {
    this.newsForm = fb.group({
      author: [''],
      title: ['', Validators.required],
      description: [''],
      url: ['', Validators.required],
      urlToImage: [''],
      publishedAt: ['', Validators.required],
      content: [''],
    });
  }

  public ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (changes.news) {
      for (let name in this.newsForm.controls) {
        if (name !== 'publishedAt') {
          this.newsForm.controls[name].setValue(changes.news.currentValue[name]);
        } else {
          this.newsForm.controls[name].setValue(
            this.datePipe.transform(changes.news.currentValue[name], 'yyyy-MM-ddTHH:mm')
          );
        }
      }
    }
  }

  public onSave() {
    this.save.emit(this.newsForm.value);
  }

  public onCansel() {
    this.cansel.emit();
  }
}
