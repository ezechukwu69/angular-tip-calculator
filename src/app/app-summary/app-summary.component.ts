import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-summary',
  templateUrl: './app-summary.component.html',
  styleUrls: ['./app-summary.component.scss']
})
export class AppSummaryComponent implements OnInit, AfterViewInit{

  constructor(private calculator: CalculatorService) { }

  animationDisabled = true

  tipAmount = `0.00`
  total = `0.00`

  ngAfterViewInit(): void {
    this.animationDisabled = false
  }

  ngOnInit(): void {
    this.calculator.tipAmountPerPersonSubject.subscribe(e => this.tipAmount = e)
    this.calculator.totalPerPersonSubject.subscribe(e => this.total = e)
  }

  onReset() {
    this.tipAmount = `0.00`
    this.total = `0.00`
    this.calculator.reset()
  }

}
