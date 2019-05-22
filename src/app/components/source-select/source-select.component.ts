import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Source } from 'src/app/models/source.model';
import { SourceService } from 'src/app/services/source.service';

@Component({
  selector: 'app-source-select',
  templateUrl: './source-select.component.html',
  styleUrls: ['./source-select.component.sass'],
})
export class SourceSelectComponent {
  public newsSources: Source[];
  @Input() public selected: string;

  constructor(private router: Router, public service: SourceService) {
    service.sources.subscribe(sources => this.newsSources = sources,
    );
  }

  public onChange(event) {
    this.router.navigate([event]);
  }
}
