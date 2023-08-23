import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { DataType } from './data-type';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
Router;

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss'],
})
export class NewComponentComponent implements OnInit {
  @ViewChild('formElement') formElement: ElementRef | undefined;
  @ViewChild('addItem') addItem!: ElementRef;

  products: DataType[] = [];

  constructor(
    private getData: DataServiceService,
    private el: ElementRef,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.productData = this.fb.group({
      productId: ['', Validators.required],
      productName: ['', Validators.required],
      productPrice: ['', [Validators.required, Validators.min(1000)]],
    });
    this.productData.controls['productName'].value;
  }
  productData: FormGroup;

  productDataDetail = {
    id: 0,
    name: '',
    price: 0,
    updating: true,
  };

  ngOnInit(): void {
    this.products = this.getData.setProductList();
  }

  listComp() {
    this.router.navigate(['/product-list']);
  }

  formVisible(ev?: any) {
    this.addItem.nativeElement.style.visibility = 'visible';

    this.productData.reset();
    console.log(ev);
    if (ev) {
      const data = {
        productId: ev.id,
        productName: ev.name,
        productPrice: ev.price,
      };
      this.productData.patchValue(data);
    }
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

  updateProductData(index: number) {
    const product = this.products[index];
    this.productDataDetail = {
      id: product.id,
      name: product.name,
      price: product.price,
      updating: true,
    };

    if (this.formElement) {
      this.formElement.nativeElement.style.visibility = 'visible';
    }
  }

  setProductData() {
    if (this.productData.valid) {
      const newProduct: DataType = {
        id: this.productData.controls['productId'].value,
        name: this.productData.controls['productName'].value,
        price: this.productData.controls['productPrice'].value,
        updating: this.productDataDetail.updating,
      };

      this.products.push(newProduct);
      console.log('Product added:', newProduct);
      this.createNewItem();
    }
  }

  confirmUpdate(index: number) {
    const updatedProduct: DataType = {
      id: this.productDataDetail.id,
      name: this.productDataDetail.name,
      price: this.productDataDetail.price,
      updating: false,
    };

    this.products[index] = updatedProduct;
    console.log('Product updated:', updatedProduct);

    this.cancelUpdate();
  }

  cancelUpdate() {
    this.productDataDetail = {
      id: 0,
      name: '',
      price: 0,
      updating: false,
    };

    if (this.formElement) {
      this.formElement.nativeElement.style.visibility = 'hidden';
    }

    this.productData.reset();
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
