import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SourceService } from 'src/app/services/source.service';
import { Source } from 'src/app/models/source.model';

@Component({
  selector: 'app-source-select',
  templateUrl: './source-select.component.html',
  styleUrls: ['./source-select.component.sass']
})
export class SourceSelectComponent implements OnInit {
  public newsSources: Source[];
  @Input() public selected: string;

  constructor(private router: Router, public service: SourceService) {
    service.sources.subscribe(
      (sources) => this.newsSources = sources
    );
  }

  ngOnInit() {
  }

  onChange(event) {
    this.router.navigate([event]);
  }
}
