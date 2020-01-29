import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module"
import { BrowserModule } from "@angular/platform-browser";
import { CardReviewComponent } from "./card-review.component";
@NgModule({
    imports: [ ModelModule, BrowserModule],
    declarations: [CardReviewComponent],
    exports: [CardReviewComponent]
})
export class CardReviewModule {

}