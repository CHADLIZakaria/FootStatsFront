import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropdown'
})
export class DropdownDirective {

  private isInside: Boolean = false;
  
  @HostBinding("class.open") isOpen = false

  constructor() { }

  @HostListener("click") toggleOpen() {
    this.isOpen = !this.isOpen
  }


}
