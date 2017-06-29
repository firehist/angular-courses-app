import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  @Input() rating: number = 0
  @Input() readonly: boolean = false
  @Output() ratingClicked: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit() {}

  rateIt(rate: number) {
    if (!this.readonly) {
      this.ratingClicked.emit(rate);
    } 
  }

}
