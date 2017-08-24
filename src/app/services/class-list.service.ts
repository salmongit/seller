import { Injectable } from '@angular/core';

@Injectable()
export class ClassListService {

  classList: Array<string> = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  constructor() {
  }

}
