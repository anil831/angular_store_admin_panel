import { Directive, Input, ElementRef, Renderer2, HostListener, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnDestroy{

  @Input('appTooltip') tooltipText?: string;
  private tooltipElement: HTMLElement | null = null;
  constructor(private el:ElementRef, private renderer:Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.createTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeTooltip();
  }

  private createTooltip() {
    // return from function if tooltipText is not present or tooltipElement is already created
    if (!this.tooltipText || this.tooltipElement) return;

    // Create and configure the tooltip element
    this.tooltipElement = this.renderer.createElement('span');
    if (this.tooltipText && this.tooltipElement) {
      this.tooltipElement.innerText = this.tooltipText;
      this.renderer.addClass(this.tooltipElement, 'tooltip');

      // Position the tooltip
      const hostElement = this.el.nativeElement;
      // In the context of your Angular directive, nativeElement refers to the DOM element to which the directive is applied.
      
      this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
      this.renderer.setStyle(this.tooltipElement, 'top', `${hostElement.offsetHeight}px`);
      this.renderer.setStyle(this.tooltipElement, 'left', `0`);
  
      // Append tooltip to host element
      this.renderer.appendChild(hostElement, this.tooltipElement);
    }

  }

  private removeTooltip() {
    // Only remove the tooltip if it exists
    if (this.tooltipElement) {
      const hostElement = this.el.nativeElement;
      this.renderer.removeChild(hostElement, this.tooltipElement);
      this.tooltipElement = null; // Explicitly set to null
    }
  }
  

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}


// If you are absolutely sure tooltipElement will not be null at a particular point, you might use the non-null assertion operator (!). However, this should be done cautiously to avoid potential runtime errors:

// this.tooltipElement!.innerText = this.tooltipText!;
