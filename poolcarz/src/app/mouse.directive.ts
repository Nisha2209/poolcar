import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouse]'
})
export class MouseDirective {

  constructor(public elementRef:ElementRef , private renderer: Renderer2) { }
  @Input('hover-class') hoverClass:any;  

  @HostListener('mouseover') onMouseEnter() {
    this.elementRef.nativeElement.classList.add(this.hoverClass);
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'blue');
    console.log('mouseover')
 }

  @HostListener('mouseout') onMouseLeave() {
    this.elementRef.nativeElement.classList.remove(this.hoverClass);
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'none');
    console.log('mouse leave :' );

  }

}
