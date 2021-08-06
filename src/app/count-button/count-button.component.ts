import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-button',
  templateUrl: './count-button.component.html',
  styleUrls: ['./count-button.component.css']
})
export class CountButtonComponent implements OnInit {

  constructor() { }

  //numberStart variable
  numberStart: number = 0;
  //incrementBy variable
  incrementBy: number = 1;

  //this function increments the numberStart variable
  incrementNumberStart(): void {
    //same as this.numberStart = this.numberStart + 1
    this.numberStart += this.incrementBy
  }

  //this function reassigns the user inputted increment as the value of our 
  //incrementBy variable
  selectIncrement(newIncrement): void {
    this.incrementBy = Number(newIncrement);
  }

  ngOnInit() {
  }

}
