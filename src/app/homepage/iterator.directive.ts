import {
  Directive,
  SimpleChange,
  ViewContainerRef,
  TemplateRef,
  Input,
  IterableDiffers,
  ChangeDetectorRef,
  DefaultIterableDiffer,
  IterableDiffer,
  ViewRef,
} from "@angular/core";
@Directive({
  selector: "[fcForOf]",
})
export class FcIteratorDirective {
  private differ: IterableDiffer<any>;
  private views: Map<any, PaIteratorContext> = new Map<
    any,
    PaIteratorContext
  >();
  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<Object>,
    private differs: IterableDiffers,
    private changeDetector: ChangeDetectorRef
  ) {}
  @Input("fcForOf")
  data: any;
  ngDoCheck() {
    console.log("in do check method")
    let changes = this.differ.diff(this.data);
    if (changes != null) {
      console.log('change detected');
      changes.forEachAddedItem((addition) => {
        let context = new PaIteratorContext(
          addition.item,
          addition.currentIndex
        );
        context.view = this.container.createEmbeddedView(
          this.template,
          context
        );
        this.views.set(addition.trackById, context);
      });
    
    let removals = false;
    changes.forEachRemovedItem((removal) => {
      removals = true;
      let context = this.views.get(removal.trackById);
      if (context != null) {
        this.container.remove(this.container.indexOf(context.view));
        this.views.delete(removal.trackById);
      }
    });
    if (removals) {
      let index = 0;
      this.views.forEach(context =>
      context.idx = index++);
      }
    }
  }
  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    //   let change = changes["expressionResult"];
    //   if (!change.isFirstChange() && !change.currentValue) {
    //     this.container.clear();
    //   } else if (change.currentValue) {
    //     this.container.createEmbeddedView(this.template);
    //     //this.container.createEmbeddedView(this.template);
    //   }
  }

  ngOnInit() {
    // this.container.clear();
    // for (let i = 0; i < this.data.length; i++) {
    // this.container.createEmbeddedView(this.template,
    // new PaIteratorContext(this.data[i],i));}
    //{$implicit:this.data[i]}

    this.differ = <IterableDiffer<any>>this.differs.find(this.data).create();
  }
}
class PaIteratorContext {
  view: ViewRef;
  constructor(public $implicit: any, public idx: any) {}
}
