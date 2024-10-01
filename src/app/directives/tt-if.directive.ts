import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTtIf]'
})
export class TtIfDirective {

  _ttif!:boolean;
  constructor(private _viewContainerRef:ViewContainerRef, private templateRef:TemplateRef<any>) { }

  @Input()
  set appTtIf(condition:boolean){
    this._ttif = condition;
    this._updateView();
  }

  _updateView(){
    if(this._ttif){
      this._viewContainerRef.createEmbeddedView(this.templateRef)
    }else{
      this._viewContainerRef.clear();
    }
  }

}
