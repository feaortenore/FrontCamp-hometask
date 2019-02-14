import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  @Input() public currentSource: string;
  @Output() filter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onFilter(event) {
    this.filter.emit(event);
  }

}
