import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.sass']
})
export class SearchFormComponent implements OnInit {
  @Output() filter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event) {
    this.filter.emit(event.value.filter);
  }

}
