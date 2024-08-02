import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMaxWords]'
})
export class MaxWordsDirective {
  @Input() maxWords!: number;

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const input = this.el.nativeElement as HTMLInputElement;
    const words = input.value.trim().split(/\s+/);
    if (words.length > this.maxWords) {
      input.value = words.slice(0, this.maxWords).join(' ');
    }
  }
}
