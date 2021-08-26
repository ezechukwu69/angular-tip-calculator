import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  percentages: number[] = [5, 10, 15, 25, 50]

  selectedPercentage: number | null = null

  bill = ""
  persons = ""

  constructor(private calculator: CalculatorService) { }

  ngOnInit(): void {
    this.calculator.selectedPercentageSubject.subscribe(e => this.selectedPercentage = e)
    this.calculator.resetSubject.subscribe(e => {
      if (e) {
        this.bill = ''
        this.persons = ''
        this.selectedPercentage = null
      }
    })
  }

  onPercentageSet(v: number) {
    this.calculator.setPercentage(v)
  }

  onBillChanged(value: string) {
    this.bill = value;
    this.calculator.setBill(value)
  }

  onPersonCountChanged(value: string) {
    this.persons = value;
    this.calculator.setNumberOfPeople(value)
  }

}
