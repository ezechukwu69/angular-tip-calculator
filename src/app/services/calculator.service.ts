import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  tipAmountPerPersonSubject = new BehaviorSubject<string>('0.00')
  totalPerPersonSubject = new BehaviorSubject<string>('0.00')
  selectedPercentageSubject = new BehaviorSubject<number | null>(null)
  resetSubject = new BehaviorSubject<boolean>(false)


  selectedPercentage: number | null = null;

  bill: number | null = null;

  numberOfPeople: number | null = null;

  setPercentage(v: number) {
    this.selectedPercentage = v;
    this.selectedPercentageSubject.next(this.selectedPercentage)
    this.calculateValue()
  }

  setBill(v: string) {
    if (v.length == 0) {
      return;
    }
    this.bill = +v;
    this.calculateValue()
  }

  setNumberOfPeople(v: string) {
    if (v.length == 0) {
      return;
    }
    this.numberOfPeople = +v
    this.calculateValue()
  }

  calculateValue() {
    if (this.bill == null) {
      return;
    }

    if (this.selectedPercentage == null) {
      return;
    }

    if (this.numberOfPeople == null || this.numberOfPeople == 0) {
      return;
     }
    
    const tipTotal = ((((this.bill * this.selectedPercentage) / 100) + this.bill) / this.numberOfPeople)
    const tipPerPerson = tipTotal - (this.bill / this.numberOfPeople!)

    this.tipAmountPerPersonSubject.next(`${tipPerPerson.toFixed(2)}`)
    this.totalPerPersonSubject.next(`${tipTotal.toFixed(2)}`)
  }

  reset() {
    this.selectedPercentage = null
    this.bill = null
    this.numberOfPeople = null
    this.resetSubject.next(true)
  }

  constructor() { }
}
