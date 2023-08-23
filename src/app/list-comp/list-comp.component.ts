import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from './product-service.service';
import { Product } from './product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-list-comp',
  templateUrl: './list-comp.component.html',
  styleUrls: ['./list-comp.component.scss'],
})
export class ListCompComponent implements OnInit {
  products: Product[] = [];
  productData: FormGroup;

  @ViewChild('formElement') formElement: ElementRef | undefined;
  @ViewChild('addItem') addItem: ElementRef | undefined;

  productDataDetail = {
    id: 0,
    name: '',
    rate: 0,
    editing: true,
  };

  constructor(
    private router: Router,
    private getData: ProductServiceService,
    private el: ElementRef,
    private fb: FormBuilder
  ) {
    this.productData = this.fb.group({
      productId: ['', Validators.required],
      productName: ['', Validators.required],
      productPrice: ['', [Validators.required, Validators.min(1000)]],
    });
  }

  userLogout() {
    this.router.navigate(['/user-login']);
  }

  ngOnInit(): void {
    this.products = this.getData.setData();
  }

  formVisible() {
    if (this.addItem) {
      this.addItem.nativeElement.style.visibility = 'visible';
    }
    this.productData.reset();
  }

  minimizeForm() {
    if (this.addItem) {
      this.addItem.nativeElement.style.visibility = 'hidden';
    }
  }

  createNewItem() {
    console.log('New item is created successfully.');
    this.minimizeForm();
  }

  setProductData() {
    if (this.productData.valid) {
      const newProduct: Product = {
        id: this.productDataDetail.id,
        name: this.productDataDetail.name,
        rate: this.productDataDetail.rate,
        editing: this.productDataDetail.editing,
      };

      this.products.push(newProduct);
      console.log('Product added:', newProduct);
      this.createNewItem();
    }
  }

  updateProductData(index: number) {
    this.productDataDetail.id = index;
    this.productDataDetail.name = this.products[index].name;
    this.productDataDetail.rate = this.products[index].rate;
    this.productDataDetail.editing = true;

    if (this.formElement) {
      this.formElement.nativeElement.style.visibility = 'visible';
    }
  }

  confirmUpdate(index: number) {
    const updatedProduct: Product = {
      id: index,
      name: this.productDataDetail.name,
      rate: this.productDataDetail.rate,
      editing: this.productDataDetail.editing,
    };

    this.products[index] = updatedProduct;
    console.log('Product updated:', updatedProduct);

    this.productDataDetail = {
      id: 0,
      name: '',
      rate: 0,
      editing: false,
    };
  }

  cancelUpdate() {
    this.productDataDetail = {
      id: 0,
      name: '',
      rate: 0,
      editing: false,
    };
  }

  deleteProductData(index: number) {
    if (index >= 0 && index < this.products.length) {
      this.products.splice(index, 1);
      console.log('Product deleted:', this.products);
    } else {
      console.log('Invalid index provided.');
    }
  }
}
