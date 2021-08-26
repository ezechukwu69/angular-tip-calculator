import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-title',
  templateUrl: './summary-title.component.html',
  styleUrls: ['./summary-title.component.scss']
})
export class SummaryTitleComponent implements OnInit {

  @Input() value = "0.00"

  constructor() { }

  ngOnInit(): void {
  }

}
