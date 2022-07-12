import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[IfAuthenticated]',
})
export class IfAuthenticatedDirective implements OnChanges {
  @Input('IfAuthenticated') IfAuthenticated!: boolean;
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.IfAuthenticated) {
      this.vcRef.createEmbeddedView(this.templateRef);
      console.log(this.templateRef);
    } else {
      console.log(this.templateRef);
      this.vcRef.clear();
    }
  }
}
