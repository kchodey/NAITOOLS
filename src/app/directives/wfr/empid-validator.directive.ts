import {  Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[empid-validator]'
})
export class EmpidValidatorDirective {

  element: ElementRef;
  input: string;

  constructor(element: ElementRef) {
    this.element = element;
  }

  @HostListener('focusout') onMouseLeave() {
    this.inputValidator();
  }

  public inputValidator() {

    console.log('in empid validator');
    
    this.input = this.element.nativeElement.value;

    let idlist = this.input.trim().split(',');

    const regex = new RegExp('^[0-9]{6}$');

    const failed = idlist.filter(id => {
      return !regex.test(id.trim());
    });

    if (failed.length > 0) {
      this.element.nativeElement.style.color = 'red';
    } else {
      this.element.nativeElement.style.color = 'green';
    }
  }

}
