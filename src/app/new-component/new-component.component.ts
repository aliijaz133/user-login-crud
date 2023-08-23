import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { DataType } from './data-type';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
Router;

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss'],
})
export class NewComponentComponent implements OnInit {
  @ViewChild('formElement') formElement: ElementRef | undefined;
  @ViewChild('addItem') addItem: ElementRef | undefined;

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
    editing: true,
  };

  ngOnInit(): void {
    this.products = this.getData.setProductList();
  }

  listComp() {
    this.router.navigate(['/product-list']);
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
      const newProduct: DataType = {
        id: this.productData.controls['productId'].value,
        name: this.productData.controls['productName'].value,
        price: this.productData.controls['productPrice'].value,
        updating: this.productDataDetail.editing,
      };

      this.products.push(newProduct);
      console.log('Product added:', newProduct);
      this.createNewItem();
    }
  }

  // updateProductData(index: number) {
  //   this.productData.controls['productId'].value;
  //   this.productData.controls['productName']. = this.products[index].name;
  //   this.productDataDetail.price = this.products[index].price;
  //   this.productDataDetail.editing = true;

  //   if (this.formElement) {
  //     this.formElement.nativeElement.style.visibility = 'visible';
  //   }
  // }

  confirmUpdate(index: number) {
    const updatedProduct: DataType = {
      id: index,
      name: this.productData.controls['productName'].value,
      price: this.productData.controls['productPrice'].value,
      updating: this.productDataDetail.editing,
    };

    this.products[index] = updatedProduct;
    console.log('Product updated:', updatedProduct);

    this.productDataDetail = {
      editing: false,
    };
  }

  cancelUpdate() {
    this.productDataDetail = {
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
