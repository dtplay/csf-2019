import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  @Output()
  onValueChanged: EventEmitter<number> = new EventEmitter<number>();

  @Input() min = 0;
  @Input() max = 10;

  currentValue = 0;

  constructor() { }

  ngOnInit() {
    this.currentValue = this.min;
  }

  increment() {
    if (this.currentValue < this.max) {
      this.currentValue++;
      this.onValueChanged.next(this.currentValue);
    }
  }

  decrement() {
    if (this.currentValue > this.min) {
      this.currentValue--;
      this.onValueChanged.next(this.currentValue);
    }
  }
}
