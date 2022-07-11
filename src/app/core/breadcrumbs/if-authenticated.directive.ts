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
  ngOnChanges(changes: SimpleChanges): void {
    if (this.IfAuthenticated) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
