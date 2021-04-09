import {
  Directive,
  SimpleChange,
  ViewContainerRef,
  TemplateRef,
  Input,
} from "@angular/core";
@Directive({
  selector: "[fcIf]",
})
export class FcStrucDirective {
  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<Object>
  ) {}
  @Input("fcIf")
  expressionResult: boolean;
  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let change = changes["expressionResult"];
    if (!change.isFirstChange() && !change.currentValue) {
      this.container.clear();
    } else if (change.currentValue) {
      this.container.createEmbeddedView(this.template);
      //this.container.createEmbeddedView(this.template);
    }
  }
}
