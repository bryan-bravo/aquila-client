import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appTimelineBar]'
})
export class TimelineBarDirective {
  style: string;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.style = `{
      height: 40px;
      border-left: 5px solid rgb(241, 199, 45);
    }`;
   }

  @HostListener('dragenter', ['$event'])
  onDragOver(event) {
      event.preventDefault();
      this.renderer.addClass(this.el.nativeElement,'bar-drag-over')
  }
  @HostListener('dragleave', ['$event'])
  onDragExit(event) {
    event.preventDefault();
    this.renderer.removeClass(this.el.nativeElement,'bar-drag-over');
  }
  @HostListener('drop', ['$event'])
  onDrop(event) {
    event.preventDefault();
    this.renderer.removeClass(this.el.nativeElement,'bar-drag-over');
  }
}
