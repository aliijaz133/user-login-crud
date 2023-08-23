import { Injectable } from '@angular/core';
import { DataType } from './data-type';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  productList: DataType[] = [];
  constructor() {
    this.productList = [
      {
        id: 1,
        name: 'Mobile 1',
        price: 2632,
        updating: true,
      },
      {
        id: 2,
        name: 'Mobile 2',
        price: 4522,
        updating: true,
      },
      {
        id: 3,
        name: 'Mobile 3',
        price: 45854,
        updating: true,
      },
      {
        id: 4,
        name: 'Mobile 4',
        price: 45154,
        updating: true,
      },
      {
        id: 5,
        name: 'Mobile 5',
        price: 45421,
        updating: true,
      },
    ];
  }

  setProductList(): DataType[] {
    return this.productList;
  }
}
