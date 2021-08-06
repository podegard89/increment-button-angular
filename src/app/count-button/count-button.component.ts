import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-button',
  templateUrl: './count-button.component.html',
  styleUrls: ['./count-button.component.css']
})
export class CountButtonComponent implements OnInit {

  constructor() { }

  numberStart: number = 0;
  incrementBy: number = 1;

  incrementNumberStart(): void {
    //same as this.numberStart = this.numberStart + 1
    this.numberStart += this.incrementBy
  }

  selectIncrement(newIncrement): void {
    this.incrementBy = Number(newIncrement);
  }

  ngOnInit() {
  }

}
