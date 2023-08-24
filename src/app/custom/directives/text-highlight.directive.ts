import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextHighlight]'
})
export class TextHighlightDirective {

  constructor(private el : ElementRef) {
    el.nativeElement.style.color='brown'
   }

}
