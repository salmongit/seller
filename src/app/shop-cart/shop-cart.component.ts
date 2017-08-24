import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  @Input()
  selectFoods = [];
  @Input()
  deliveryPrice = 0;
  @Input()
  minPrice = 0;
  @Input()
  seller: string;

  balls = [{
    show: false
  }, {
    show: false
  }, {
    show: false
  }, {
    show: false
  }, {
    show: false
  }];

  dropballs = [];

  constructor() { }

  ngOnInit() {
  }

  toggleList() {

  }

  drop(add_el_dom) {
    let rect = add_el_dom.getBoundingClientRect();
    let x = rect.left - 32;
    let y = -(window.innerHeight - rect.top - 22);
    for(let ball of this.balls){
      if(!ball.show) {
        ball.show = true;
        ball['el'] = add_el_dom;
        this.dropballs.push(ball);
        return;
      }
    }
  }

  totalPrice() {
    let total = 0;
    this.selectFoods.forEach((food) => {
      total += food.price * food.count;
    });
    return total;
  }

  totalCount() {
    let count = 0;
    this.selectFoods.forEach((food) => {
      count += food.count;
    });
    return count;
  }

  payClass() {
    if (this.totalPrice() < this.minPrice) {
      return 'not-enough';
    } else {
      return 'enough';
    }
  }

  payDesc() {
    if (this.totalPrice() === 0) {
      return `￥${this.minPrice}元起送`;
    } else if (this.totalPrice() < this.minPrice) {
      let diff = this.minPrice - this.totalPrice();
      return `还差￥${diff}元起送`;
    } else {
      return '去结算';
    }
  }

}
