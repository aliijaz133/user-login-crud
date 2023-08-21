import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  products: Product[];
  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Samsung A32',
        rate: 70000,
      },
      {
        id: 2,
        name: 'Samsung A04S',
        rate: 47000,
      },
      {
        id: 3,
        name: 'Samsung A14',
        rate: 60000,
      },
    ];
  }

  setData(): Product[] {
    return this.products;
  }
}
