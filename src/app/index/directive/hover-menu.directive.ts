import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverMenu]'
})
export class HoverMenuDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.highLight('#2399ed');
    const span = this.el.nativeElement.querySelector('a');
    const i = this.el.nativeElement.querySelector('i');
    this.rd.setStyle(span, 'color', 'white');
    if (i) {
      this.rd.setStyle(i, 'color', 'white');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highLight('#f9f8f8');
    const span = this.el.nativeElement.querySelector('a');
    const i = this.el.nativeElement.querySelector('i');
    this.rd.setStyle(span, 'color', null);
    if (i) {
      this.rd.setStyle(i, 'color', null);
    }
  }

  private highLight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  constructor(private el: ElementRef, private rd: Renderer2) { }

}
