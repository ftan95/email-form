import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSearchIcon]'
})
export class SearchIconDirective {

  @Input('test') public word: string;
  constructor(private el: ElementRef) { }

  applyStyles(change: string): void {
    this.el.nativeElement.firstChild.className = change;
  }

  @HostListener('mouseenter')
  handleOnEnter() {
    this.applyStyles('fa fa-send');
  }

  @HostListener('mouseleave')
  handleOnLeave() {
    this.applyStyles('fa fa-search');
  }

}
