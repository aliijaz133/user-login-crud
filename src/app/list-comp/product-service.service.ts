import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  products: Product[];
  constructor() {
    // const arry1 = ['a', 'b', 'c', 'd'];
    // arry1.splice(3, 0, 'z');
    // console.log(arry1);

    this.products = [
      {
        id: 1,
        name: 'Samsung A32',
        rate: 70000,
        editing: true,
      },
      {
        id: 2,
        name: 'Samsung A04S',
        rate: 47000,
        editing: true,
      },
      {
        id: 3,
        name: 'Samsung A14',
        rate: 60000,
        editing: true,
      },
    ];
  }

  setData(): Product[] {
    return this.products;
  }
}
