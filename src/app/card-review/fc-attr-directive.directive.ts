import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[fc-attr]',
  exportAs: 'fcModel'
})
export class FcAttrDirective {
  
  @Input("fc-attr")
  index: number;

  @Output("fc-delete")
  click = new EventEmitter<number>();

  @HostListener("click")
  deleteCard() {
    this.click.emit(this.index);
  }

  constructor() {

   }

}