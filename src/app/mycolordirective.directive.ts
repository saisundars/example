import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appMycolordirective]'
})
export class MycolordirectiveDirective {

  constructor(elm:ElementRef,render:Renderer) { 
    render.setElementStyle(elm.nativeElement,'color','red');
    render.setElementStyle(elm.nativeElement,'background-color','green')

  }

}
