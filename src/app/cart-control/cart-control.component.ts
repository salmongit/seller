import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {trigger, state, animate, transition, style, query, group} from '@angular/animations';

@Component({
  selector: 'app-cart-control',
  templateUrl: './cart-control.component.html',
  styleUrls: ['./cart-control.component.css'],
  animations: [
    trigger('move', [
      state('expanded', style({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      })),
      state('void', style({
        opacity: 0,
        transform: 'translate3d(100%, 0, 0)'
      })),
      // 从递减按钮消失状态到出现状态的转换
      transition(
        'void => expanded', group([
          animate('0.4s linear'),
          query('.inner', animate('0.4s linear', style({
            transform: 'rotate(-180deg)'
          })))
        ])
      ),
      // 从递减按钮存在状态到消失状态的转换
      transition(
        'expanded => void', group([
          animate('0.4s linear', style({
            opacity: 0,
            transform: 'translateX(100%)'
          })),
          query('.inner', animate('0.4s linear', style({
            transform: 'rotate(180deg)'
          })))
        ])
      )
    ])
  ]
})
export class CartControlComponent implements OnInit {

  @Input()
  food: object;
  stateExpression: string;

  @Output()
  add_el: EventEmitter<HTMLElement> = new EventEmitter<HTMLElement>();

  constructor() {
  }

  ngOnInit() {
  }

  addCart($event) {
    if (!$event._constructed) {
      return;
    }
    if (!this.food.hasOwnProperty("count")) {
      this.food['count'] = 1;
    } else {
      this.food['count']++;
    }
    this.stateExpression = "expanded";
    this.add_el.emit($event.target);
  }

  decreaseCart($event) {
    if (!$event._constructed) {
      return;
    }
    if (this.food['count'] > 0) {
      this.food['count']--;
    }
  }
}
