import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMaxWords]'
})
export class MaxWordsDirectiveDirective {
  @Input() maxWords: number = 50;
  @Output() wordLimitExceeded = new EventEmitter<boolean>();

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const input = this.el.nativeElement.value;
    const words = input.split(/\s+/).filter((word: string) => word.length > 0);
    if (words.length > this.maxWords) {
      this.el.nativeElement.value = words.slice(0, this.maxWords).join(' ');
      this.wordLimitExceeded.emit(true);
    } else {
      this.wordLimitExceeded.emit(false);
    }
  }
}
