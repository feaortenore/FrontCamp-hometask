import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.sass'],
})
export class SectionHeaderComponent {
  @Input() public sectionTitle: string;

}
