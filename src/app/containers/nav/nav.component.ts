import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass'],
})
export class NavComponent {
  @Input() public currentSource: string;
  @Output() public filter: EventEmitter<string> = new EventEmitter();

  public onFilter(event: string) {
    this.filter.emit(event);
  }

}
