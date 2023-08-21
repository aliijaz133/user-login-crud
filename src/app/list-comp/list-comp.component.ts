import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from './product-service.service';
import { Product } from './product';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-comp',
  templateUrl: './list-comp.component.html',
  styleUrls: ['./list-comp.component.scss'],
})
export class ListCompComponent implements OnInit {
  products: Product[] = [];
  setProduct!: FormGroup;

  constructor(
    private router: Router,
    private getData: ProductServiceService,
    private el: ElementRef
  ) {}

  userLogout() {
    this.router.navigate(['/user-login']);
  }

  ngOnInit(): void {
    this.products = this.getData.setData();
  }

  formVisible() {
    const formElements = this.el.nativeElement.getElementsByClassName(
      'form-visibilty__control'
    );

    for (let i = 0; i < formElements.length; i++) {
      formElements[i].style.visibility = 'visible';
    }
  }

  minimizeForm() {
    const formElements = this.el.nativeElement.getElementsByClassName(
      'form-visibilty__control'
    );
    if (formElements.length > 0) {
      for (let i = 0; i < formElements.length; i++) {
        formElements[i].style.visibility = 'hidden';
      }
    }
  }

  createNewItem() {
    console.log('New item is created successfully.');
    const formElements = this.el.nativeElement.getElementsByClassName(
      'form-visibilty__control'
    );
    if (formElements.length > 0) {
      for (let i = 0; i < formElements.length; i++) {
        formElements[i].style.visibility = 'hidden';
      }
    }
  }

  setProductData() {
    const productIdElement = document.getElementsByName(
      'productId'
    )[0] as HTMLInputElement;

    const productNameElement = document.getElementsByName(
      'productName'
    )[0] as HTMLInputElement;

    const productRateElement = document.getElementsByName(
      'productPrice'
    )[0] as HTMLInputElement;

    const productId = productIdElement.valueAsNumber;
    const productName = productNameElement.value;
    const productRate = productRateElement.valueAsNumber;

    const newProduct: Product = {
      id: productId,
      name: productName,
      rate: productRate,
    };

    this.products.push(newProduct);
    console.log(this.products);
  }

  updateProductData() {}

  deleteProductData(index: number) {
    // delete this.products[index];

    if (index >= 0 && index < this.products.length) {
      this.products.splice(index, 1);

      console.log('Product deleted:', this.products);
    } else {
      console.log('Invalid index provided.');
    }
  }
}
