import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  @Input('appHighlight') color!:string;
  constructor(private el:ElementRef, private renderer:Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.color || 'yellow');
  }

  setColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

}
