import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../models/article.model';

@Pipe({
  name: 'filterNews'
})
export class FilterNewsPipe implements PipeTransform {

  transform(value: Article[], args?: { filter: string }): Article[] {
    if(!value || !args.filter){
      return value;
    }
    return value.filter(news => news.title.includes(args.filter));
  }

}
