import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Directive({
  selector: '[appBadge]'
})
export class BadgeDirective {
  @Input('appBadge') public num: number;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter')
  handleOnEnter() {
    console.log(this.el);
    this.el.nativeElement.innerHTML = `<span _ngcontent-gbe-c0="" style = "background-color: red; color: white; box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12); position: relative; z-index: 2; border-radius: 10em; padding: 1px 7px; background-color: #fe1212; font-size: 11px; color: #fff; left: auto; top: -2px; left: 5px;">${this.num}</span>`;
  }

  @HostListener('mouseleave')
  handleOnLeave() {
   this.el.nativeElement.innerHTML = null;
  }

  @HostListener('click')
  handleOnClick() {
    this.el.nativeElement.innerHTML = `<span _ngcontent-gbe-c0="" style = "background-color: red; color: white; box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12); position: relative; z-index: 2; border-radius: 10em; padding: 1px 7px; background-color: #fe1212; font-size: 11px; color: #fff; left: auto; top: -2px; left: 5px;">${this.num}</span>`;
  }

}
