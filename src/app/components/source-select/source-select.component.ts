import { Component, OnInit, Input } from '@angular/core';
import { news } from '../../data/news'
import { Router } from '@angular/router';

@Component({
  selector: 'app-source-select',
  templateUrl: './source-select.component.html',
  styleUrls: ['./source-select.component.sass']
})
export class SourceSelectComponent implements OnInit {
  public newsSources: { id: string, name: string }[]
    = news.map(source => ({ id: source.id, name: source.name }));
  @Input() public selected: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onChange(event) {
    this.router.navigate([event]);
  }
}
