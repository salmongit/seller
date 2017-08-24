import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  private LENGTH: number = 5;
  private CLS_ON: string = 'on';
  private CLS_HALF: string = 'half';
  private CLS_OFF: string = 'off';

  @Input()
  size:number = 48;
  @Input()
  score:number = 0;
  itemClasses:Array<string> = [];
  starType:string = "star-48";
  constructor() { }

  ngOnInit() {
    this.itemClasses = this.itemClasses_cal();
    this.starType = 'star-' + this.size;
  }

  itemClasses_cal() {
    const result: Array<string> = [];
    const score:number = Math.floor(this.score * 2) / 2;
    const hasDecimal = score % 1 !== 0;
    const integer = Math.floor(score);
    for (let i = 0; i < integer; i++) {
      result.push(this.CLS_ON);
    }
    if (hasDecimal) {
      result.push(this.CLS_HALF);
    }
    while (result.length < this.LENGTH) {
      result.push(this.CLS_OFF);
    }
    return result;
  }
}
