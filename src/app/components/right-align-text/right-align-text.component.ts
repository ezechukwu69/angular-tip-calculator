import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-right-align-text',
  templateUrl: './right-align-text.component.html',
  styleUrls: ['./right-align-text.component.scss']
})
export class RightAlignTextComponent implements OnInit {

  @Input() value: string = ""

  @Output() onChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeValue(v: HTMLInputElement) {
    this.onChanged.emit(v.value);
  }
}
