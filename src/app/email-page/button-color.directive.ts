import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appButtonColor]'
})
export class ButtonColorDirective {

  constructor(private el: ElementRef) { }

  applyStyles(backgroundColor: string, text: string): void {
    this.el.nativeElement.style.backgroundColor = backgroundColor;
    this.el.nativeElement.style.color = text;
  }

  @HostListener('mouseenter')
  handleOnEnter() {
    this.applyStyles('white', 'black');
  }

  @HostListener('mouseleave')
  handleOnLeave() {
    this.applyStyles('rgb(2, 196, 255)', 'white');
  }

}
