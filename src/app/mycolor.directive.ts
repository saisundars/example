import { Directive, ElementRef, Renderer, HostListener,  } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {

  constructor( private elm:ElementRef,private render:Renderer) { 
    render.setElementStyle(elm.nativeElement,'color','red');
    render.setElementStyle(elm.nativeElement,'background-color','green');   
       
    }
    @HostListener ('mouseover') onmouseover(){
      this.render.setElementStyle(this.elm.nativeElement,'color','blue');
    }
    @HostListener ('mouseleave') onmouseleave(){
      this.render.setElementStyle(this.elm.nativeElement,'color','yellow');
    }

  

}
