import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFormVisibility]',
})
export class FormVisibilityDirective {
  constructor(private el: ElementRef) {}
}
