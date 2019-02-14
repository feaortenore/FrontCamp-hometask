import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.sass']
})
export class SectionHeaderComponent implements OnInit {
  @Input() public sectionTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
