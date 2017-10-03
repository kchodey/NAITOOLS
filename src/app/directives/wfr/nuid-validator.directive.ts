import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[nuid-validator]'
})
export class NuidValidatorDirective {

  element: ElementRef;
  input: string;

  constructor(element: ElementRef) {
    this.element = element;
  }

  @HostListener('focusout') onMouseLeave() {
    this.inputValidator();
  }

  public inputValidator() {

    console.log('in nuid validator');
    
    this.input = this.element.nativeElement.value;

    let idlist = this.input.trim().split(',');

    const nuidRegex = new RegExp('^[a-zA-Z][0-9]{6}$');

    const failed = idlist.filter(id => {
      return !nuidRegex.test(id.trim());
    });

    if (failed.length > 0) {
      this.element.nativeElement.style.color = 'red';
    } else {
      this.element.nativeElement.style.color = 'green';
    }
  }
}
