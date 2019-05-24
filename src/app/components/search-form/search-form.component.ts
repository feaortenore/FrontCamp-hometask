import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.sass'],
})
export class SearchFormComponent {
  @Output() public filter: EventEmitter<string> = new EventEmitter();

  public onSubmit(event) {
    this.filter.emit(event.value.filter);
  }

}
